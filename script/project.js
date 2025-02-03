const projectContainer = document.querySelector(".projects");
const projectAPIEndPoint = './data/data.json';

fetch(projectAPIEndPoint)
.then(response => response.json())
.then((projects)=>{
    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        // Cover image:
        const projectImgDiv = document.createElement("div");
        projectImgDiv.classList.add("projectImg")
        if(project.image){
            const imageLink = document.createElement("a");
            imageLink.href = `https://dev.to${project.live_link}`;
            imageLink.target = "_blank";
            imageLink.rel = "noopener noreferrer";

            const image = document.createElement("img");
            image.src = project.image;
            image.alt = project.title;
            image.style.width = "100%";

            imageLink.appendChild(image);
            projectImgDiv.appendChild(imageLink)
            projectDiv.appendChild(projectImgDiv);

            // Project Body:

            const projectBody = document.createElement("div");
            projectBody.classList.add("Showcase_container");

            const title = document.createElement("h3");
            title.textContent = `${project.title}`;

            // Project Descriptions:

            const projectDescription = document.createElement("div");
            projectDescription.classList.add("project_description");

            const description = document.createElement("p");
            description.textContent = `${project.description}`;
            projectDescription.appendChild(description);

            // Project tags:

            const stack = document.createElement("div");
            stack.classList.add("blogfooter");

            const tags = document.createElement("p");
            project.tags.forEach((tag)=>{
                const span = document.createElement("span");
                span.classList.add("tag");
                span.textContent = `${tag}`; // Added tag text inside the span
                tags.appendChild(span);
            })

            stack.appendChild(tags);


            // live images:
            const links = document.createElement("div");
            links.classList.add("repo");

            const livelink = document.createElement("a");
            livelink.href = project.live_link;
            livelink.target = "_blank";

            const liveImg = document.createElement("img");
            liveImg.src = `../live.png`
            liveImg.alt = project.title;

            livelink.appendChild(liveImg);
            links.appendChild(livelink)

            const repolink = document.createElement("a");
            repolink.href = project.github_repo;
            repolink.target = "_blank";

            const gitImg = document.createElement("img");
            gitImg.src = `../github.png`
            gitImg.alt = project.title;

            repolink.appendChild(gitImg);
            links.appendChild(repolink)

            projectBody.appendChild(title);
            projectDiv.appendChild(projectBody);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(stack);
            projectDiv.appendChild(links);
            projectContainer.appendChild(projectDiv)
        }
    });
})