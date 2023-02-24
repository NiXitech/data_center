const datalist = [
    {
      Item: {
        name: 'country',
        label: '国家/地区',
        tooltip: '国家/地区代号:IN/GB/SE', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: {
        allowClear: true,
      },
    },
    {
      Item: {
        name: 'platform',
        label: '平台',
        tooltip: 'ios/android', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_key',
        label: '交易所',
        tooltip: 'bybit/binance/okx', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_name',
        label: '交易所名称',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_icon',
        label: '交易所图标(大图)',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_img',
        label: '交易所图标(小图)',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_rank',
        label: '交易所排名',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_link',
        label: '交易所跳转的deeplink链接',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_url_schema',
        label: '交易所URLSchema',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'recommend',
        label: '是否为推荐的交易所',
        tooltip: '', // 填写提示
      },
      itemtype: 'select', // 根据标签类型在childkey添加对应属性和值即可
      childkey: {
        placeholder: '请选择',
        options: [
          { label: '是', value: 1 },
          { label: '否', value: 0 },
        ],
      },
    },
    {
      Item: {
        name: 'offer_id',
        label: '交易所签署的OfferID',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'aff_id',
        label: '交易所渠道ID',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'aff_sub__id',
        label: '交易所子渠道ID',
        rules: [
          {
            required: true,
            message: '请输入必填项',
          },
        ],
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'steps',
        label: '交易所使用步骤',
        tooltip: 'json格式', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        label: '推荐交易所',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'source',
        label: '数据来源',
        tooltip: 'yeahmoni/occuad', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        label: '交易所状态',
        tooltip: '', // 填写提示
      },
      itemtype: 'select', // 根据标签类型在childkey添加对应属性和值即可
      childkey: {
        placeholder: '请选择',
        options: [
          { label: '启用', value: 1 },
          { label: '不启用', value: 0 },
          { label: '暂停', value: -1 },
        ],
      },
    },
    {
      Item: {
        name: 'create_ts',
        label: '创建时间',
        tooltip: 'yeahmoni/occuad', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_custom',
        label: '自定义字段',
        rules: [
          {
            required: true,
            message: '请输入必填项',
          },
        ],
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'suppport_idfa',
        label: '是否支持IDFA',
        rules: [
          {
            required: true,
            message: '请输入必填项',
          },
        ],
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'ex_extra',
        label: '扩展字段',
        rules: [
          {
            required: true,
            message: '请输入必填项',
          },
        ],
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'register_commission',
        label: '注册佣金',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'deposit_commission',
        label: '首充佣金',
        tooltip: '', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
    {
      Item: {
        name: 'withdraw_amount_options',
        label: '提现数量档位信息',
        tooltip: 'json格式', // 填写提示
      },
      itemtype: 'input', // 根据标签类型在childkey添加对应属性和值即可
      childkey: { allowClear: true },
    },
  ];

  export default datalist;