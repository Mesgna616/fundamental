var images;


images = ['https://flxt.tmsimg.com/assets/p18930951_b_v13_ac.jpg', 'https://www.wikihow.com/images/thumb/0/01/Draw-Snoopy-Step-27.jpg/aid1087964-v4-1200px-Draw-Snoopy-Step-27.jpg', 'https:///wp-content/uploads/2021/11/Snoopy_In_Space_Photo_020201-1014x570.jpg', 'https://www.denofgeek.com/wp-content/uploads/2015/12/peanuts_movie_snoopy_flying_woodstock-1.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  images.shift();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.slice(-1)[0]);
  images.pop();
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images[0]);

});
