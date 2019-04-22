## How to Design Twitter (Part 1)

### Common Misunderstandings
   * When asked to design Twitter, dont dive into technical details immediately.

   * Don't list tools or frameworks like **MongoDB, Bootstrap, MapReduce etc.**

   * Interviewers want **high-level ideas** about how you will solve the problem.  

   * The tool you use isn't what's important, but how you define the problem and analysis the issue step by step is.

### Define the Problem

   * Compress Twitter into its **MVP (minimum viable product)**

   * The whole product shoudl allow people to follow each other and view other's feeds.

### High Level Solution

   * Divide the whole system into several core components.  You can divide by frontend/backend,  offline/online logic etc.

   * Design solutions for the following two things:

        1. Data modeling

            * if we want to use a relational databse like MySQL, we can define user object and feed object.

            * Two relations are also necessary, one user can follow each other , the other is each feed has a user owner.

        2. How to serve feeds

            * How to fetch feeds from all the people you follow and render them by time.

    
