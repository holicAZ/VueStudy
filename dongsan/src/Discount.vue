<template>
<div>
    <h4 class="discount">지금 결제하면 {{discount_num}}% 할인</h4>
</div>  
</template>

<script>
export default {
    name: 'Discount',
    props: {
      discount_num : Number,
    },
}
</script>

<style>
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

}
</style>