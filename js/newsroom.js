window.addEventListener("load", function (event) {
  //   fetch("data/newsroom.json")
  //     .then((res) => res.json())
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));

  const getNewsRoom = async function () {
    try {
      // fetch 를 이용해서 서버에서 데이터 가져옮
      let response = await fetch("data/newsroom.json");
      let result = await response.json();
      parseYuHtml(result);
    } catch (err) {
      console.log(err);
    }
  };
  //   function parseYuHtml(_data) {}
  const parseYuHtml = (data) => {
    let allTag = "";
    let list = [...data.newsroom];
    list.forEach((item, idx, arr) => {
      const tag = `
        <a href="${item.link}" target="${item.target}" class="newsroom-box">
            <div class="newsroom-img">
                <img src="images/${item.photo}" />
            </div>
            <div class="newsroom-info">
                <p>${item.title}</p>
                <span>${item.date}</span>
            </div>
        </a>
      `;
      allTag += tag;
    });
    const positionTag = document.querySelector(".newsroom-wrap");
    positionTag.innerHTML = allTag;
  };
  //   const parseYuHtml = function(_data)  {}

  getNewsRoom();
});
