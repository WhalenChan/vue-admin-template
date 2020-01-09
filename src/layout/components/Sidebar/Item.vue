<!-- 注意这个.vue文件没有template模板，但是有render函数 -->
<!-- 模板 -> 进行编译 -> 生成ast树 -> 数据绑定 -> 成render函数 -> 成虚拟dom -> 真实dom -->
<!-- 如果直接使用render函数，就省略了模板的编译过程，vue运行的更快 -->
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  // 实际上这个函数替代了模板的作用
  // 写模板可读性好 但是需要编译 性能略差 不写模板可读性较差 但是不需要编译 性能好
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<svg-icon icon-class={icon}/>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
