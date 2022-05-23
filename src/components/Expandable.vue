<template>
    <article :class="['expandable', type]" @click="this.status = 'open'">
        <header :class="this.status">
            <i :class="icon"></i>
            <h2>{{ title }}</h2>
        </header>

        <div v-if="status === 'open'">
            <slot name="content"></slot>
        </div>
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
            
            &.open {
                border-bottom: 2px dashed;
            }
        }

        > div {
            display: block;
            padding: 18px 0;
            line-height: 2.5;
            text-align: justify;
            font-size: 1rem;
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
            status: 'close',
        }

    }
}
</script>