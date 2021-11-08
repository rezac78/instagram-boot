import 'zone.js/dist/zone-node';
import * as mongoose from 'mongoose';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import * as compression from 'compression'

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), '../browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));
  server.use('/assets', express.static(join(process.cwd(), 'dist/fuse/browser/assets')));
  server.use(compression())
  server.set('view engine', 'html');
  
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    Pages.findOne({url: `${req.originalUrl}`},(err,page)=>{
      res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] },(err,html)=>{
        if(err){
          console.log(err);
        }
        if(html){
          const respBody = page;
          if(respBody){
            html = html.replace(/\$TITLE/g, respBody.title);
            html = html.replace(/\$DESCRIPTION/g, respBody.description);
            html = html.replace(/\$OG_META_KEYWORDS/g, respBody.metaKeywords);
            html = html.replace(/\$OG_META_DESCRIPTION/g, respBody.metaDescription);
            html = html.replace(/\$OG_DESCRIPTION/g, respBody.ogDescription);
            html = html.replace(/\$OG_TITLE/g, respBody.ogTitle);
            html = html.replace(/\$OG_IMAGE/g, respBody.img);
            html = html.replace(/\$OG_SITE/g, respBody.ogSite);
          }
          res.send(html);
        }
      });

    })
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;
  // (<any>mongoose).Promise = global.Promise;
  const mongodb = mongoose.connect('mongodb://barbodco:19171917Ss!@cluster0-shard-00-00-zl4qb.mongodb.net:27017/rewordingwb?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{
    useNewUrlParser: true,
    useUnifiedTopology: true    
  })

  // Start up the Node server
  const server = app();
  mongodb
  .then(async (db) => {
    console.log('Connected to MongoDB');
    // Start up the Node server
    
    server.listen(port, () => {
      console.log(`Node Express server listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
export interface PagesDocument extends mongoose.Document{
  url: string,
  title: string,
  description: string,
  metaKeywords: string,
  metaDescription: string,
  ogDescription: string,
  ogTitle: string,
  img: string,
  ogSite: string,
  
}

const pagesSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  metaKeywords: String,
  metaDescription: String,
  ogDescription: String,
  ogTitle: String,
  img: String,
  ogSite: String,
});
const Pages = mongoose.model<PagesDocument>('Pages', pagesSchema);

export default Pages;

