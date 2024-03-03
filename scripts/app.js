const getAllPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const { posts } = await res.json();

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
            <div class="prifile">
              <div class="bg-white relative rounded-[16px] w-[4rem] h-[4rem]">
                <img class="w-full h-full object-cover rounded-[16px]" src="./assets/images/user.jpg" alt="">
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
                <p class="text-[#12132dcc] text-[14px] font-[500]">#music</p>
                <p class="text-[#12132dcc] text-[14px] font-[500]">Author:
                  <span class="text-[#12132dcc] text-[14px] font-[500]">Arifa Moni</span>
                </p>
              </div>
              <h3 class="font-bold mb-[15px] text-[18px]">10 Kids Unaware of Their Halloween Costume</h3>
              <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative
              </p>
              <!-- dotted line  -->
              <div class="border_bottom my-[18px]"></div>
              <!-- activity container -->
              <div class="activity_container flex  justify-between items-center">
                <div class="activity_parent flex gap-3 lg:gap-6">
                  <div class="flex gap-2 lg:gap-[10px] justify-center items-center">
                    <img src="./assets/icons/message.png" alt="">
                    <p class="text-[14px] text-[#12132d99]">560</p>
                  </div>
                  <div class="flex gap-2 lg:gap-[10px]justify-center items-center">
                    <img src="./assets/icons/eye.png" alt="">
                    <p class="text-[14px] text-[#12132d99]">2,560</p>
                  </div>
                  <div class="flex gap-2 lg:gap-[10px] justify-center items-center">
                    <img src="./assets/icons/clock.png" alt="">
                    <p class="text-[14px] text-[#12132d99]">2,560</p>
                  </div>
                </div>
                <!-- Add button  -->
                <button id="add_btn">
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

getAllPosts();
