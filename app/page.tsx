import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold ">
        Q1. From this list, rank your 5 most favourite and 5 least favourite
        support tasks. Provide a brief explanation for each
      </h1>
      <h1 className="text-3xl font-bold">
        Q2. What do you want to learn or do more of at work?
      </h1>
      <h1 className="text-3xl font-bold">
        Q3. Describe how you solved a challenge or technical issue that you
        faced in a previous role (preferably in a previous support role). How
        did you determine that your solution was successful
      </h1>
      <h1 className="text-3xl font-bold">
        Q4. When would you choose to use Edge Functions, Serverless Functions,
        or Edge Middleware with Vercel?
      </h1>
      <h1 className="text-3xl font-bold">
        Q5. Imagine a customer writes in requesting help with a build issue on a
        framework or technology that you've not seen before. How would you begin
        troubleshooting this and what questions would you ask the customer to
        understand the situation better?
      </h1>
      <h1 className="text-3xl font-bold">
        Q6. The customer from question 5 replies to your response with the below
        “I’m so frustrated. I’ve been trying to make this work for hours and I
        just can’t figure it out. It must be a platform issue so just fix it for
        me instead of asking me questions.” Please write a follow-up reply to
        the customer.
      </h1>
      <h1 className="text-3xl font-bold">
        Q7. A customer writes in to the Helpdesk asking "How do I do a redirect
        from the /blog path to https://example.com?" Please write a reply to the
        customer. Feel free to add any information about your decision making
        process after the reply.
      </h1>
      <h1 className="text-3xl font-bold">
        Q8. A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer. Feel
        free to add any information about your decision making process after the
        reply.
      </h1>
      <h1 className="text-3xl font-bold">
        Q9. What do you think is one of the most common problems which customers
        ask Vercel for help with? How would you help customers to overcome
        common problems, short-term and long-term
      </h1>
      <h1 className="text-3xl font-bold">
        Q10. How could we improve or alter this familiarisation exercise?
      </h1>
    </main>
  );
}
