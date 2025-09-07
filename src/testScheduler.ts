const priorities = ["cheap", "green", "fast"];

async function testLaunch() {
  for (const priority of priorities) {
    const res = await fetch("http://localhost:8080/launch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priority }),
    });

    const data = await res.json();
    console.log(`Priority: ${priority} → Region: ${data.region}, JobID: ${data.jobId}`);
  }
}

testLaunch();
