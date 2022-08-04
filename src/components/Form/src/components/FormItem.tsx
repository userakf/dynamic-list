import { ElFormItem,ElForm,ElInput } from 'element-plus'
import { reactive } from 'vue'
const form = reactive({
    name:'kfc',
    age:'男'
})
export default () => {
    return (
        <div>
            <ElForm.FormItem label='name'>
                <ElInput v-model={ form.name } />
            </ElForm.FormItem>
        </div>
    )
}