let apiendpoint = "https://dev.to/api/articles?username=anikakash";
let blogsContainer = document.querySelector(".blogs");

fetch(apiendpoint)
  .then((response) => response.json())
  .then((blogs) => {

    blogs.sort((a,b)=> b.public_reactions_count - a.public_reactions_count)

    blogs.forEach((blog) => {
      
      // Create Blog div
      const blogDiv = document.createElement("div");
      blogDiv.classList.add("blog");

      // Cover Image:
      if(blog.cover_image){

        const imageLink = document.createElement("a");
        imageLink.href = `https://dev.to${blog.path}`;
        imageLink.target = "_blank";
        imageLink.rel = "noopener noreferrer";

        const image = document.createElement("img");
        image.src = blog.cover_image;
        image.alt = blog.title;
        image.style.width = "100%";

        imageLink.appendChild(image);
        blogDiv.appendChild(imageLink);
      }

      // Blog body container:
      const blogBody = document.createElement("div");
      blogBody.classList.add("blogbody");

      // Header Section:
      const header = document.createElement("div")
      header.classList.add("header");

      const title = document.createElement("p");
      title.classList.add("blogtitle");

      const titleLink = document.createElement("a");
      titleLink.href = `https://dev.to${blog.path}`;
      titleLink.textContent = blog.title;
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";

      title.appendChild(titleLink)

      const authorDiv = document.createElement("div");
      authorDiv.classList.add("author");

      const author = document.createElement("p");
      const publishDate = new Date(blog.published_at).toLocaleDateString(
        "en-GB",
        {day: "2-digit", month: "short", year: "2-digit"}
      );

      author.innerHTML = `${blog.user.name} <span>${publishDate}</span>`;
      authorDiv.appendChild(author);

      header.appendChild(title);
      header.appendChild(authorDiv)

      // Description Section

      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("projectdescription");

      const description = document.createElement("p");
      description.textContent = blog.description;
      descriptionDiv.appendChild(description);

      // Footer Section 
      const footer = document.createElement("div");
      footer.classList.add("blogfooter");

      // Tags 

      const tags = document.createElement("p");
      blog.tag_list.forEach((tag)=>{
        const span = document.createElement("span");
        span.classList.add("tag");
        span.textContent = tag; 
        tags.appendChild(span);
      })

      // like count:
      const likeCount = document.createElement("p");
      likeCount.classList.add("likecount");
      likeCount.textContent = `Total liked: ${blog.public_reactions_count}`;

      footer.appendChild(tags);
      footer.appendChild(likeCount);

      // Append elements together:

      blogBody.appendChild(header);
      blogBody.appendChild(descriptionDiv);
      blogBody.appendChild(footer);
      blogDiv.appendChild(blogBody);


      blogsContainer.appendChild(blogDiv);
    });
  })
  .catch((error) => console.error("Error fetching articles:", error));
