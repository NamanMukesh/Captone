import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

interface Region {
  name: string;
  cost: number;
  carbon: number;
}

const regions: Region[] = [
  { name: "us-east-1", cost: 0.10, carbon: 200 },
  { name: "eu-north-1", cost: 0.08, carbon: 100 },
  { name: "ap-south-1", cost: 0.12, carbon: 150 },
];

function pickRegion(priority: string): Region {
  if (priority === "cheap") {
    return regions.reduce((a, b) => (a.cost < b.cost ? a : b));
  }
  if (priority === "green") {
    return regions.reduce((a, b) => (a.carbon < b.carbon ? a : b));
  }
  return regions[0]; // default fast
}


// Health check
app.get("/health", (_, res) => {
  res.json({ ok: true });
});

// Dummy upload route
app.post("/upload", (req, res) => {
  // Later: connect with S3 (Person B's part)
  res.json({ path: "s3://bucket/fake-input.mp4" });
});

//Scheduler
app.post("/launch", (req, res) => {
  const { priority } = req.body;
  const region = pickRegion(priority);

  const fakeJob = {
    jobId: Date.now().toString(), // unique job ID
    region: region.name,
    status: "running",
    priority,
  };

  res.json(fakeJob);
});


// Dummy job status route
app.get("/status/:jobId", (req, res) => {
  const { jobId } = req.params;

  // Later: check EC2 status (Person D's part)
  res.json({
    jobId,
    status: "completed",
    output: "s3://bucket/output.txt",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
