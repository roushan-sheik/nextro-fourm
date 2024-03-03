const getAllPosts = async (clickedId) => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const { posts } = await res.json();
  // handle add posts
  posts.forEach((post) => {
    if (post.id === clickedId) {
      displayAddPost(post.title, post.view_count);
    }
  });

  displayPost(posts);
};

//* NOTE Display posts
const post_container = document.getElementById("post_container");
function displayPost(posts) {
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
           <!-- <<<<<<<<<<<< post start >>>>>>>>>>>>> -->
          <div class="post lg:p-9 p-7  rounded-[24px] flex gap-5 flex-col lg:flex-row">
            <!-- profile  -->
            <div class="profile">
              <div class="bg-white relative rounded-[16px] w-[4rem] h-[4rem]">
                <img class="w-full h-full object-cover rounded-[16px]" src="${
                  post.image
                }" alt="">
                <!-- active icon  -->
                <div class="${
                  post.isActive ? "active_status" : "deactive_status"
                }"></div>
              </div>
            </div>
            <!-- content box parent  -->
            <div>
              <!-- about author -->
              <div class="flex gap-4 mb-[10px]">
                <p class="text-[#12132dcc] text-[14px] font-[500]">#${
                  post.category
                }</p>
                <p class="text-[#12132dcc] text-[14px] font-[500]">Author:
                  <span class="text-[#12132dcc] text-[14px] font-[500]">${
                    post.author.name
                  }</span>
                </p>
              </div>
              <h3 class="font-bold mb-[15px]  text-[18px]">${post.title}</h3>
              <p>${post.description}</p>
              <!-- dotted line  -->
              <div class="border_bottom my-[18px]"></div>
              <!-- =====> activity container <===== -->
              <div class="activity_container flex  justify-between items-center">
                <div class="activity_parent flex gap-3 lg:gap-6">
                  <div class="flex gap-2 lg:gap-[10px] justify-center items-center">
                    <img src="./assets/icons/message.png" alt="">
                    <p class="text-[14px] text-[#12132d99]">${
                      post.comment_count
                    }</p>
                  </div>
                  <div class="flex gap-2 lg:gap-[10px]justify-center items-center">
                    <img src="./assets/icons/eye.png" alt="">
                    <p class="text-[14px] text-[#12132d99]">${
                      post.view_count
                    }</p>
                  </div>
                  <div class="flex gap-2 lg:gap-[10px] justify-center items-center">
                    <img src="./assets/icons/clock.png" alt="">
                    <p class="text-[14px] text-[#12132d99]">${
                      post.posted_time
                    } min</p>
                  </div>
                </div>
                <!-- Add button  -->
                <button id="add_btn" onClick="handleAddClick(${post.id})" >
                  <img src="./assets/icons/email.png" alt="">
                </button>
              </div>
            </div>
          </div>
          <!-- <<<<<<<<<<<< post ends >>>>>>>>>>>>> -->
        `;
    post_container.appendChild(div);
  });
}

// Handle add post
async function handleAddClick(id) {
  getAllPosts(id);
}
// display add post
function displayAddPost(title, view) {
  const added_post_parent = document.getElementById("added_post_parent");
  const mark_count = document.getElementById("mark_count");
  const contentDiv = document.createElement("div");
  contentDiv.innerHTML = `
       <div class="flex mb-4 justify-between items-center bg-white rounded-[16px] p-[14px]">
              <h4 class="basis-[70%] text-base font-[600]">${title}</h4>
              <div class="basis-[30%] flex items-center gap-1 justify-end">
                <img src="./assets/icons/eye.png" alt="">
                <span>${view}</span>
              </div>
            </div>
  `;
  added_post_parent.appendChild(contentDiv);
  let markCount = parseInt(mark_count.innerText);
  mark_count.innerText = markCount + 1;
}
getAllPosts();
