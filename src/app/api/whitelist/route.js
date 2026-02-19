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

    const clean = s =>
      s.replace(/[#].*/g, "").trim().toLowerCase();

    const addr = clean(address);

    const fcfs = fcfsRaw
      .split(/\r?\n/)
      .map(clean)
      .filter(Boolean);

    const gtd = gtdRaw
      .split(/\r?\n/)
      .map(clean)
      .filter(Boolean);

    // ✅ GTD ALWAYS WINS
    if (gtd.includes(addr)) {
      return Response.json({ status: "gtd" });
    }

    if (fcfs.includes(addr)) {
      return Response.json({ status: "wl" });
    }

    return Response.json({ status: "none" });

  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
