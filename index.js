export default {
  async fetch(request) {
    const url = new URL(request.url);
    const msg = url.searchParams.get("msg") || "Hello from Roblox!";

    const webhook = "https://discord.com/api/webhooks/1397128927222169690/RMNYuy4W6sY9jhQX6t7EJRhI1fpAI3iNIV88PnRToi7LKKm-drsTeiLQ1O8ZgJAfOl-J";

    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: msg }),
    });

    if (!response.ok) {
      return new Response("Failed to send", { status: 500 });
    }

    return new Response("Sent to Discord!");
  },
};
