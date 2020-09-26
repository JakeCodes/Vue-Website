<template>
  <div id="about" style="min-height: 100vh; padding-top: 80px">
    <h1>Hi I'm Jake</h1>
    <div id="description">
      <img
        data-aos="zoom-in"
        src="../../assets/imgs/JakeLogo.png"
        alt="jakecodes_img"
        style="width: 200px; height; 200px; padding: 0"
      />
      <p data-aos="zoom-in">
        I love to Program and learn about new Technologies! I started when I was
        13 and have continued ever since. I love to code because you can do
        anything your mind tells you too.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
#description {
  width: 50%;
  margin: auto;
  border: #b95b37 30px dashed;
  background-color: #41474d;
  color: white;
  font-size: 25px;
  padding: 80px;
  margin-top: 80px;
}
@media (max-width: 1000px) {
  #description {
    width: 100%;
    padding: 30px;
  }
}
</style>
