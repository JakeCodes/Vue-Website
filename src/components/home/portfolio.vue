<template>
  <div id="portfolio" style="min-height: auto; padding-top: 100px">
    <h1>Portfolio</h1>

    <PortfolioCard
      title="Javascript"
      description="Why was the JavaScript developer sad? Because he did not Node how to Express himself"
      animation="fade-left"
      link="/projects/javascript"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Dk_c6Kwi4JaIxYDlvE3NfQHaHa%26pid%3DApi&f=1"
    />

    <PortfolioCard
      title="Python"
      animation="fade-right"
      description="Would you like a lovely fluffy little white rabbit, or a cutesy wootesly little brown rabbit? Actually, says the little girl,I do not think my python would notice."
      link="/projects/python"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qFMUJKX6xmDkJh9yyoFxQQHaFj%26pid%3DApi&f=1"
    />

    <PortfolioCard
      title="Java"
      animation="fade-left"
      description="Why do Java Programmers have to wear glasses? Because they don’t C#"
      link="/projects/java"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zChnlgyldX90D8mTKeZxjAHaEK%26pid%3DApi&f=1"
    />
  </div>
</template>

<script>
import PortfolioCard from "../utils/portfolioCard";

export default {
  name: "portfolio",
  components: { PortfolioCard },
};
</script>

<style scoped></style>
