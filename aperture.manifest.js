import { Document, Text, Code, Image } from "@aperture.io/editor";

export default {
  resourceId: "jn1ads",
  resourceName: "resource-example-1",
  component: Document.Static,
  visible: [
    {
      fileId: "sdf1ba",
      path: "sdf1ba.txt",
      type: "text-plain",
      component: Text.Title
    },
    {
      fileId: "oij2n5",
      path: "oij2n5.html",
      type: "text-rich",
      component: Text.Html
    },
    {
      fileId: "8jqna6",
      path: "8jqna6.js",
      type: "code-javascript",
      component: Code.JS
    },
    {
      fileId: "ajb22q",
      path: "ajb22q.png",
      type: "image-png",
      component: Image
    },
    {
      fileId: "lko4pl",
      path: "lko4pl.md",
      type: "text-markdown",
      component: Text.Markdown
    }
  ],
  hidden: [
    {
      fileId: "hx7g98",
      path: "aperture.manifest.js",
      type: "code-javascript",
      component: Code.JS
    },
    {
      fileId: "nsa5jq",
      path: "package.json",
      type: "code-json",
      component: Code.JS
    }
  ]
};
