import express from "express";
import path from "path";
import ProjectJson from "../project-builder/interfaces/ProjectJson";

const startServer = (projectData: ProjectJson) => {
  const app = express();

  app.use(express.static(path.join(__dirname, "client")));

  app.get("/", (_req: express.Request, res: express.Response) => {
    res.send(
      `
  <!DOCTYPE html>
  <html>
  <head>
  <script>
      window._projectData = ${JSON.stringify(projectData)};
  </script>
  <script>
    console.warn = () => {};
    console.error = () => {};
  </script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="google" value="notranslate" />
  <link rel="shortcut icon" href="static/favicon.ico" />
  <title>Scratch Developement Server</title>
  <script defer src="runtime.js"></script>
  <script
    defer
    src="chunks/vendors-node_modules_arraybuffer-loader_lib_to-array-buffer_js-node_modules_bowser_src_bowser-6806fa.3db560bbd85e80899a2e.js"
  ></script>
  <script
    defer
    src="chunks/vendors-node_modules_core-js_fn_array_includes_js-node_modules_core-js_fn_promise_finally_js--1b5d1a.ce3366d391dd0e535b3d.js"
  ></script>
  <script
    defer
    src="chunks/src_containers_gui_jsx-src_lib_app-state-hoc_jsx-src_lib_hash-parser-hoc_jsx.9e60726d7001de3786e4.js"
  ></script>
  <script defer src="gui.js"></script>
  </head>
  <body>
  <script>
    document.getElementsByTagName("body")[0].onclick = () => {
      new AudioContext().resume();
    };
  </script>
  </body>
  </html>
  `
    );
  });

  app.listen(5000, () => {
    console.log(
      "Scratch developement server started on http://localhost:5000/"
    );
  });
};

export default startServer;
