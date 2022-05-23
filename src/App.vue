<template>
    <HeaderSection></HeaderSection>
    <router-view/>
    <FooterSection></FooterSection>
</template>

<script>
import HeaderSection from "./sections/HeaderSection.vue"
import FooterSection from "./sections/FooterSection.vue"

export default {
    name: "TheBestLanguage",
    components: {
        HeaderSection,
        FooterSection,
    }
}
</script>