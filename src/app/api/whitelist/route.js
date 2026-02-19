import { promises as fs } from "fs";
import path from "path";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");

  if (!address) {
    return Response.json({ error: "No address" }, { status: 400 });
  }

  try {
    const fcfsPath = path.join(process.cwd(), "src/db/fcfs.csv");
    const gtdPath = path.join(process.cwd(), "src/db/gtd.csv");

    const [fcfsRaw, gtdRaw] = await Promise.all([
      fs.readFile(fcfsPath, "utf8"),
      fs.readFile(gtdPath, "utf8"),
    ]);

    const clean = s => s.replace(/[#].*|\s+/g, "").toLowerCase();
    const addr = address.toLowerCase();

    const fcfs = fcfsRaw.split(/\r?\n/).map(clean).filter(Boolean);
    const gtd = gtdRaw.split(/\r?\n/).map(clean).filter(Boolean);

    // GTD HAS PRIORITY
if (gtd.includes(addr)) {
  return res.status(200).json({ status: 'gtd' });
}

if (fcfs.includes(addr)) {
  return res.status(200).json({ status: 'wl' });
}

return res.status(200).json({ status: 'none' });

    return Response.json({ status: "none" });

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
