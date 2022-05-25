<template>
    <article :class="['expandable', type]">
        <header @click="this.expand = !this.expand">
            <i :class="icon"></i>
            <h2>{{ title }}</h2>
        </header>
        
        <transition name="expand">
            <div v-if="this.expand">
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
        box-shadow: 3px 3px 5px 0 rgba(0,0,0,0.1);

        > header {
            display: flex;
            align-items: center;
            user-select: none;
            cursor: pointer;
            padding: 24px 0;

            > i {
                font-size: 1.5rem;
            }

            > h2 {
                font-size: 1.125rem;
                font-weight: bold;
                font-variation-settings: "wght" 500;
                padding-right: 8px;
            }

        }

        > div {
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

            > header {
                border-bottom-color: var(--expandable-green-border-header);
            }
        }

        &.blue {
            background: var(--expandable-blue-bg);
            color: var(--expandable-blue-color);
            border-color: var(--expandable-blue-border);

            > header {
                border-bottom-color: var(--expandable-blue-border-header);
            }
        }

        .expand {
            &-leave-active {
                transition: max-height .5s ease-in-out;
                max-height: 9999px;
            }

            &-enter-active {
                transition: max-height 1s ease-in-out;
                max-height: 9999px;
            }

            &-enter-from, &-leave-to {
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

    }
}
</script>