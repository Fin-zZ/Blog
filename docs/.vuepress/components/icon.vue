<template>
  <div>
    <span>
      文字文字
      <i class="icon-general icon-calendar"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Icon"
}
</script>

<style>
.icon-general{
  display: inline-block;
  height: 20px;
  width: 20px;
  white-space: nowrap;
  text-indent: -999em;
  letter-spacing: -1em;
}
.icon-general:before{
  content: '\3000';
}

.icon-calendar{
  background: url(../assets/briefcase-solid.svg) no-repeat;
}
</style>