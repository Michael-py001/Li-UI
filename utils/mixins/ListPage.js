export default {
	data() {
		return {
			// 列表
			list: [],
			// 页数
			page: 1,
			// 单页条数
			per_page: 30,
			// 总条数
			total: 0,
			// 最后一页页面
			last_page: 0,
			// 是否取消自动在mounted钩子执行ListFun
			close_mounted: false,
			// 混淆
			list_time_stamp: 0,
			// 是否正在请求中
			is_loading: false,
			// 是否获取过一次以上列表
			is_get: false
		}
	},
	computed: {
		// 列表是否显示
		no_data() {
			return this.list.length == 0 && this.is_get
		},
		// 没有更多
		no_more() {
			return this.list.length > 0 && (this.page >= this.last_page)
		},
		page_end_type() {
			if (this.is_loading) return 'loading'
			if (this.no_data) return 'noData'
			if (this.no_more) return 'noMore'
			if (!this.is_loading) return 'loadMore'
			return ''
		}
	},
	mounted() {
		if (!this.close_mounted) {
			this.ListFun()
		}
	},
	methods: {
		async ListFun() {
			if (typeof this.GetList === 'function') {
				this.is_loading = true
				await this.GetList()
			}
		},
		// 处理回调数据
		HandleRes({
			// 当前页面
			current_page = 1,
			// 总页数， total_pages 和 last_page 相同
			total_pages = 0,
			//每页数据量
			per_page = 30,
			//总数据个数
			total = 0,
			// 数据
			data = []
		}) {
			this.page = parseInt(current_page) || 1
			this.per_page = parseInt(per_page) || 30
			this.last_page = parseInt(total_pages) || 0
			this.total = parseInt(total) || 0
			if (this.page === 1) {
				this.list = JSON.parse(JSON.stringify(data))
			} else {
				this.list.push(...JSON.parse(JSON.stringify(data)))
			}
			this.is_loading = false
			this.is_get = true
		},
		// 加载更多
		GetMore() {
			if (!this.is_loading && !this.no_more && !this.no_data) {
				this.page++
				this.ListFun()
			}
		},
		// 刷新数据
		async RefreshList() {
			this.list = []
			this.page = 1
			this.last_page = 0
			this.is_loading = false
			await this.ListFun()
		},
		// 随机数生成
		setRandom() {
			return `${Date.parse(new Date())}_${this.page || ''}_${parseInt(Math.random()*(10000),10)}`
		}
	},
	onReachBottom() {
		this.GetMore()
	},
	async onPullDownRefresh() {
		await this.RefreshList()
		uni.stopPullDownRefresh()
	}
}
