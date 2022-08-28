<template>
    <article :class="['expandable', type]">
        <header @click="changeStat">
            <div class="sperator">
                <i :class="icon"></i>
                <h2>{{ title }}</h2>
            </div>
            <span class="chevron-down"></span>
        </header>

        <transition name="expand">
            <div id="content" v-if="this.expand">
                <slot name="content"></slot>
            </div>
        </transition>
    </article>
</template>

<style lang="scss" scoped>
article {
    display: block;
    margin: 0 0 32px 0;
    border-radius: 12px;
    border: 2px solid;
    padding: 0 24px;
    box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.1);


    >header {
        display: flex;
        align-items: center;
        user-select: none;
        justify-content: space-between;
        cursor: pointer;
        padding: 24px 0;

        >.sperator i {
            font-size: 1.5rem;
        }

        >.sperator h2 {
            font-size: 1.125rem;
            font-weight: bold;
            font-variation-settings: "wght" 500;
            padding-right: 8px;
        }

        >.sperator {
            display: flex;
        }

    }

    >#content {
        display: block;
        padding: 18px 0;
        line-height: 2.5;
        text-align: justify;
        font-size: 1rem;
        border-top: 2px dashed;
    }

    &.green {
        background: var(--expandable-green-bg);
        color: var(--expandable-green-color);
        border-color: var(--expandable-green-border);

        >header {
            border-bottom-color: var(--expandable-green-border-header);
        }
    }

    &.blue {
        background: var(--expandable-blue-bg);
        color: var(--expandable-blue-color);
        border-color: var(--expandable-blue-border);

        >header {
            border-bottom-color: var(--expandable-blue-border-header);
        }
    }

    .expand {
        &-leave-active {
            transition: max-height .5s ease-out;
            max-height: 9999px;
        }

        &-enter-active {
            transition: max-height 1s ease-in;
            max-height: 9999px;
            overflow-y: hidden;
        }

        &-enter-from,
        &-leave-to {
            max-height: 0;
        }
    }

}
</style>

<script>
export default {
    name: "ExpandableItem",
    props: {
        icon: String,
        title: String,
        type: String,
    },
    data() {

        return {
            expand: false,
        }

    },
    methods: {
        changeStat() {
            this.expand = !this.expand;
            if (this.expand){
                document.querySelector(".chevron-down").className = 'chevron-up';
            } else {
                document.querySelector(".chevron-up").className = 'chevron-down';
            }
        }
    }
}
</script>