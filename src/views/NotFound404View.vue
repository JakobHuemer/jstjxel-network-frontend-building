<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();

// console.log(router.getRoutes());
const bestMatch = ref("NONE")
onMounted(() => {
  const routes = router.getRoutes().filter(e => e.meta.on404)

  bestMatch.value = findMostSimilarPath(router.currentRoute.value.path, routes)
  console.log("Best match", bestMatch.value);
})


function findMostSimilarPath(userInput, pathObjects) {
  let bestMatch = null;
  let minDistance = Infinity;

  // Iterate through each object in the array
  for (const pathObj of pathObjects) {
    const path = pathObj.path;
    const distance = levenshteinDistance(userInput, path);

    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = path;
    }
  }

  return bestMatch;
}

// Function to calculate the Levenshtein distance between two strings
function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}
</script>

<template>
  <div class="wrapper">
    <div class="container">

      <div class="error-message">
        <h1>404</h1>
        <span class="route">{{ router.currentRoute.value.path.length >= 24 ? router.currentRoute.value.path.slice(0, 24) + "..." : router.currentRoute.value.path }}</span>
        <span class="text"> does not exist,</span><br>
        <span class="text">did you mean <RouterLink class="router-link" :to="bestMatch">{{ bestMatch }}</RouterLink></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  place-items: center;
  position: relative;
}

.container {
  display: grid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .error-message {
    width: fit-content;
    font-size: 2rem;
    font-family: Inter, sans-serif;

    span,
    .route {
      font-weight: 600;
    }

    .router-link {
      color: #00C7AC;
      text-decoration: none;
    }

    .route {
      border: 1px solid #00C7AC;
      border-radius: .4rem;
      padding: .2rem .6rem;
    }

    h1 {
      font-weight: 800;
    }
  }
}
</style>