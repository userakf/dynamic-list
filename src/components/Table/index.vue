<template>
    <el-scrollbar ref="scrollbarRef" class="full-height" @scroll="scroll">
        <el-table :data="tableData" style="width: 100%" ref="innerRef">
            <el-table-column prop="date" label="Date" width="150" />
            <el-table-column label="Delivery Info">
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column label="Address Info">
                    <el-table-column prop="state" label="State" width="120" />
                    <el-table-column prop="city" label="City" width="120" />
                    <el-table-column prop="address" label="Address" />
                    <el-table-column prop="zip" label="Zip" width="120" />
                </el-table-column>
            </el-table-column>
        </el-table>
    </el-scrollbar>
    <el-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { ElTable, ElTableColumn, ElScrollbar, ElSlider } from 'element-plus'
import { Arrayable } from 'element-plus/es/utils/typescript.js';

const max = ref(100)
const value = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

onMounted(() => {
  max.value = innerRef.value!.clientHeight
})

const inputSlider = (value: Arrayable<number>) => {
  scrollbarRef.value!.setScrollTop(value as number)
}
const scroll = ({ scrollTop }:any) => {
  value.value = scrollTop
}
const formatTooltip = (value: number) => {
  return `${value} px`
}
const tableData = reactive([
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    }
])

</script>
<style scoped>
.full-height {
    height: 80vh;
}
</style>