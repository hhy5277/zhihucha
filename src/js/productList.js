// 商品列表

{ //点击弹出popup
    // const $popup = $('.product-popup')
    $(document).on('click', '.item-content', function () {
        // const $this = $(this)
        // 获取选中的商品数据
        // const name = $this.find('.item-title').text()
        // const detail = $this.find('.item-subtitle').text()
        // const img = $this.find('img').attr('src')
        // const stock = $this.find('.stock').text()
        // const price = $this.find('.price').text()

        // 重新渲染popup中的内容
        // $popup.find('.detail').text(detail)
        // $popup.find('img').attr('src', img)
        // $popup.find('.stock').text(stock)
        // $popup.find('.item-price').text(price)

        // 用js的方式打开popup
        $.popup('.product-popup');
    });
}

{ //无限滚动加载数据
    // 加载flag
    let loading = false;
    // 最多可加载的条目
    let maxItems = 100;

    // 每次加载添加多少条目
    let itemsPerLoad = 5;

    function addItems(number, lastIndex) {
        // 生成新条目的HTML
        let html = '';
        for (let i = lastIndex + 1; i <= lastIndex + number; i++) {
            html += `
                <div class="card product">
                    <div class="card-header">x数码商城</div>
                    <div class="card-content">
                        <div class="list-block media-list">
                            <ul>
                                <li class="item-content">
                                    <div class="item-media">
                                        <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">标题，劲量不要太长</div>
                                        </div>
                                        <div class="item-subtitle">子标题，介绍商品的详细说明。。</div>
                                        <div class="item-info"><span class="item-price">13</span> <span class="item-stock pull-right">1</span></div>
                                    </div>
                                </li>
                                <li class="item-content">
                                    <div class="item-media">
                                        <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg">
                                    </div>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-title">标题，劲量不要太长</div>
                                        </div>
                                        <div class="item-subtitle">子标题，介绍商品的详细说明。。</div>
                                        <div class="item-info"><span class="item-price">13</span> <span class="item-stock pull-right">1</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-footer">
                        <span>2015/01/15</span>
                        <span>合计：<span class="item-price">26</span></span>
                    </div>
                </div>
            `;
        }
        // 添加新条目
        $('.list-container').append(html);

    }
    //预先加载20条
    addItems(itemsPerLoad, 0);

    // 上次加载的序号

    let lastIndex = 20;

    // 注册'infinite'事件处理函数
    $(document).on('infinite', '.infinite-scroll-bottom', function () {

        // 如果正在加载，则退出
        if (loading) return;

        // 设置flag
        loading = true;

        // 模拟1s的加载过程
        setTimeout(function () {
            // 重置加载flag
            loading = false;

            if (lastIndex >= maxItems) {
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                $.detachInfiniteScroll($('.infinite-scroll'));
                // 删除加载提示符
                $('.infinite-scroll-preloader').remove();
                return;
            }

            // 添加新条目
            addItems(itemsPerLoad, lastIndex);
            // 更新最后加载的序号
            lastIndex = $('.list-container > *').length;
            //容器发生改变,如果是js滚动，需要刷新滚动
            $.refreshScroller();
        }, 1000);
    });
}