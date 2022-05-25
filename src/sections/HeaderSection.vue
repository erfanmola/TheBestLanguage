<template>

    <header id="header">

        <div class="holder">

            <routerLink to="" :style="'color: ' + $route.meta.accent">
                <i class="icon-life-buoy"></i>
                <h1>{{ $route.meta.title }}</h1>
            </routerLink>

            <ul>
                <li title="حالت تیره/روشن" @click="ToggleMode()" id="toggle-mode">
                    <i :class="this.darkMode ? 'icon-sun' : 'icon-moon'"></i>
                </li>
            </ul>

        </div>

    </header>

</template>

<style lang="scss">

    header#header {
        display: block;
        padding: 24px 0;

        > div {
            display: grid;
            grid-template-columns: 5fr 1fr;

            a {
                display: flex;
                align-items: center;
                user-select: none;
                transition: opacity .15s;

                i {
                    font-size: 2rem;
                    padding-left: 12px;
                }

                h1 {
                    font-size: 1.625rem;
                    font-weight: bold;
                    font-variation-settings: "wght" 600;
                }

                &:hover {
                    opacity: 0.875;
                }
            }

            > ul {
                display: flex;
                align-items: center;
                direction: ltr;

                > li {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    cursor: pointer;
                    transition: .15s opacity;
                    font-size: 1.25rem;

                    &:hover {
                        opacity: 0.625;
                    }
                }
            }

        }
    }

</style>

<script>
export default {
    name: 'HeaderSection',
    data() {
        return {
            darkMode: false
        }
    },
    methods: {

        ToggleMode() {

            this.SetMode(this.darkMode ? 'light' : 'dark');

        },

        SetMode(mode, notify = true) {

            this.darkMode = mode === 'dark'

            if (this.darkMode) {

                document.body.classList.add('dark');

            }else{

                document.body.classList.remove('dark');

            }

            if (notify) {

                localStorage.setItem('mode', mode);

            }

            document.cookie = `mode=${mode}; expires=Thu, 1 Jan 2048 12:00:00 UTC; path=/`;
            
        },

    },
    created() {

        window.addEventListener("storage", (ev) => {

            if (ev.key === 'mode') {

                this.SetMode(ev.newValue, false);

            }

        });

    },
    mounted() {
        this.SetMode(`; ${document.cookie}`.split(`; mode=`).pop().split(';').shift(), false);
    },
}
</script>