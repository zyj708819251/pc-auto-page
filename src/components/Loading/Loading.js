import Vue from 'vue'
import LoadingComponent from '@com/Loading/Loading.vue'

const Loading = {}
let showLoading = false // 存储loading显示状态
let loadingNode = null // 存储loading节点元素
const LoadingConstructor = Vue.extend(LoadingComponent)

Loading.install = function (Vue) {
	Vue.prototype.$loading = function (tips,type, method) {
		if (method === 'hide') {
			loadingNode.isShowLoading = showLoading = false
		} else {
			if (showLoading) {
				return
			}
			loadingNode = new LoadingConstructor({
				data: {
					isShowLoading: showLoading,
					content: tips||'拼命加载中',
					seletedType: type||'spin'
				}
			})
			loadingNode.$mount()
			document.body.appendChild(loadingNode.$el)
			loadingNode.isShowLoading = showLoading = true
		}
	};

	['show', 'hide'].forEach(function (method) {
		Vue.prototype.$loading[method] = function (tips, type) {
			return Vue.prototype.$loading(tips, type,method)
		}
	})
}

export default Loading
