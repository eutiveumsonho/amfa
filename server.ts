import "https://deno.land/std@0.204.0/dotenv/load.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

// In case you are having issues connecting to the database, please
// take a look at https://github.com/denodrivers/mongo/issues/206#issuecomment-864509720
const MONGODB_URI = Deno.env.get("MONGODB_URI");

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

async function handler(req: Request): Promise<Response> {
  const client = await new MongoClient().connect(MONGODB_URI!);

  if (req.method === "POST") {
    try {
      const parsedBody = await req?.json();
      const result = await client
        .collection("letters")
        .insertOne({ ...parsedBody, createdAt: new Date().toISOString() });

      console.log({ result });
      return new Response("Ok", { status: 201 });
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  // Parse the request URL to determine which file to serve
  const url = new URL(req.url, `http://${req.headers.get("host")}`);
  const filePath = url.pathname === "/" ? "/index.html" : url.pathname;
  const absPath = `${Deno.cwd()}/${filePath}`;

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  const mimeMap: Record<string, string> = {
    css: "text/css",
    js: "text/javascript",
    html: "text/html",
    ttf: "text/css",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
  };

  const mimeType =
    mimeMap[filePath.substr(filePath.lastIndexOf(".") + 1)] ?? "text/html";

  try {
    const file = await Deno.open(absPath);
    const fileInfo = await Deno.stat(absPath);

    return new Response(file.readable, {
      status: 200,
      headers: new Headers({
        "Content-Type": mimeType,
        "Content-Length": fileInfo.size.toString(),
      }),
    });
  } catch (error) {
    console.error(error);
    new Response("Not Found", { status: 404 });
  }

  return new Response("Not Found", { status: 404 });
}

Deno.serve({ port: 3000 }, handler);
