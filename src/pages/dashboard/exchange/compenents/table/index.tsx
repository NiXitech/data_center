import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table'
import { ProTable, TableDropdown } from '@ant-design/pro-table';
import { Button } from 'antd';
// import { request } from 'express';
import { useEffect, useRef, useState } from 'react';
// import { useRequest } from 'umi';
// import { fakeChartData2 } from '../../service';
import { getExchange } from '@/services/http/api';

const Exchange = () => {
  const actionRef = useRef<ActionType>();

  type GithubIssueItem = {
    id: number;
    url: string;
    number: number;
    title: string;
    labels: {
      name: string;
      color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
  };

  const columns: ProColumns<GithubIssueItem>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '国家/地区',
      dataIndex: 'country',
      copyable: true,
      ellipsis: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      disable: true,
      title: '链接',
      dataIndex: 'ex_link',
      // filters: true,
      // onFilter: true,
      ellipsis: true,
      // valueType: 'select',
      // valueEnum: {
      //     all: { text: '超长'.repeat(50) },
      //     open: {
      //         text: '未解决',
      //         status: 'Error',
      //     },
      //     closed: {
      //         text: '已解决',
      //         status: 'Success',
      //         disabled: true,
      //     },
      //     processing: {
      //         text: '解决中',
      //         status: 'Processing',
      //     },
      // },
    },
    {
      disable: true,
      title: '链接名称',
      dataIndex: 'ex_name',
      search: false,
    },
    {
      title: '操作系统',
      key: 'platform',
      dataIndex: 'platform',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: 'recommend',
      dataIndex: 'recommend',
    },
    {
      title: '数据来源',
      dataIndex: 'source',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ],
    },
  ];

  // const { data } = useRequest(getExchange);
  const [list, setList] = useState([])


  const getData = async () => {
    try {
      const { data } = await getExchange() as any
      setList(data?.exchanges)
    } catch (error) {

    }
  }
  useEffect(
    () => {
      getData()
    })

  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      dataSource={list}
      // request={
      //   async () => {
      //     const result = await getExchange()
      //     console.log('result----result------>', result)
      //     return {
      //       data: [],
      //       success: true,
      //       total: 2
      //     }
      //   }
      // }
      // cardBordered
      // request={async (params = {}, sort, filter) => {
      //     // console.log(sort, filter);
      //     // return request<{
      //     //     data: GithubIssueItem[];
      //     // }>('fakeChartData2', {
      //     //     params,
      //     // });
      //     return getExchange;
      // }}
      // dataSource={list}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="交易所数据"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
        // <Dropdown
        //     key="menu"
        //     menu={{
        //         items: [
        //             {
        //                 label: '1st item',
        //                 key: '1',
        //             },
        //             {
        //                 label: '2nd item',
        //                 key: '1',
        //             },
        //             {
        //                 label: '3rd item',
        //                 key: '1',
        //             },
        //         ],
        //     }}
        // >
        //     <Button>
        //         <EllipsisOutlined />
        //     </Button>
        // </Dropdown>,
      ]}
    />
  );
}

export default Exchange;
