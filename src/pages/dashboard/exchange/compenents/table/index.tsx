import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table'
import { ProTable, TableDropdown } from '@ant-design/pro-table';
import { Button, Popconfirm } from 'antd';
// import { request } from 'express';
import { Suspense, useEffect, useRef, useState } from 'react';
// import { useRequest } from 'umi';
// import { fakeChartData2 } from '../../service';
import { getExchange } from '@/services/http/api';
import { editExchange } from '@/services/http/api';
import { delExchange } from '@/services/http/api';
import { PageLoading } from '@ant-design/pro-layout';

const Exchange = () => {
    const actionRef = useRef<ActionType>();
    const [loading, setloading] = useState(true)

    const delData = async (id: any) => {
        try {
            const { code, data } = await delExchange({ data: { id: id } }) as any
            console.log('codeDEL:', code, 'dataDEL:', data)
        } catch (error) {

        }
    }

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
            title: '国家/地区',
            dataIndex: 'country',
            ellipsis: true,
            filters: true,
            onFilter: true,
            valueEnum: {
                FI: { text: 'FI' },
                IN: { text: 'IN' },
                AU: { text: 'AU' },
                CH: { text: 'CH' },
                PL: { text: 'PL' },
                CA: { text: 'CA' },
                SE: { text: 'SE' },
                IE: { text: 'IE' },
                GB: { text: 'GB' },
                RU: { text: 'RU' },
                JP: { text: 'JP' },
                PH: { text: 'PH' },
                NL: { text: 'NL' },
                MY: { text: 'MY' },
                KR: { text: 'KR' },
                IT: { text: 'IT' },
                HK: { text: 'HK' },
                CN: { text: 'CN' },
            },
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
            title: '广告跟踪链接',
            dataIndex: 'ex_link',
            copyable: true,
            hideInSearch: true,
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
            title: '交易所名称',
            dataIndex: 'ex_name',
            editable: false,
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
            title: '平台',
            key: 'platform',
            dataIndex: 'platform',
            editable: false,
            hideInSearch: true,
            filters: true,
            onFilter: true,
            valueEnum: {
                ios: { text: 'ios' },
                android: { text: 'android' },
                other: { text: 'other' },
            },
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
            title: '推荐交易所',
            dataIndex: 'recommend',
            editable: false,
            hideInSearch: true,
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '此项为必填项',
                    },
                ],
            },
            render: (record) => {
                return record === 0 ? '不推荐' : '推荐'
            }
        },
        {
            title: '数据来源',
            dataIndex: 'source',
            editable: false,
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '此项为必填项',
                    },
                ],
            },
            filters: true,
            onFilter: true,
            valueEnum: {
                yeahmobi: { text: 'yeahmobi' },
                occuad: { text: 'occuad' }
            },
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            valueType: 'select',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '此项为必填项',
                    },
                ],
            },
            filters: true,
            onFilter: true,
            valueEnum: {
                [0]: { text: '不启用', status: 0 },
                [1]: { text: '启用', status: 1 },
                [-1]: { text: '暂停', status: -1 },
            },
            // render: (record)=> {
            //     return record === 0 ? '不启用' : record === 1 ? '启用' : '暂停'
            // }
        },
        {
            title: '操作',
            valueType: 'option',
            key: 'option',
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        console.log('record->:', record)
                        action?.startEditable?.(record.id);
                    }}
                >
                    编辑
                </a>,
                // <Popconfirm title="Sure to delete?" onConfirm={() => delExchange(record.key)}>
                //     <a>Delete</a>
                // </Popconfirm>
                <a
                    key="delete"
                    onClick={() => {
                        delData(record.id);
                    }}
                >
                    删除
                </a>,
                // <TableDropdown
                // key="actionGroup"
                // onSelect={() => action?.reload()}
                // menus={[
                //   { key: 'copy', name: '复制' },
                //   { key: 'delete', name: '删除' },
                // ]}
                //   />,
            ],
        },
    ];

    // const { data } = useRequest(getExchange);
    const [list, setList] = useState([])


    const getData = async () => {
        try {
            setloading(true)
            const { code, data } = await getExchange() as any
            if (code === 200) {
                setList(data?.exchanges)
                setloading(false)
            }else {
                setloading(false)
            }
        } catch (error) {

        }
    }

    const editData = async (rowKey: any, record: any, row: any) => {
        try {
            setloading(true)
            record.status = Number(record.status)
            const { code, data } = await editExchange(record) as any
            if (code === 200) {
                getData()
            } else {
                setloading(false)
            }
        } catch (error) {

        }
    }

    useEffect(
        () => {
            getData()
        }, [])

    return (
        <Suspense fallback={<PageLoading />}>
            <ProTable<GithubIssueItem>
                loading={loading}
                columns={columns}
                actionRef={actionRef}
                dataSource={list}
                editable={{
                    type: 'multiple',
                    onSave: (rowKey, record, row) => { editData(rowKey, record, row) }
                    // onChange: setEditableRowKeys,
                }}
                columnsState={{
                    persistenceKey: 'pro-table-singe-demos',
                    persistenceType: 'localStorage',
                    onChange(value) {
                        // console.log('value: ', value);
                    },
                }}
                rowKey="id"
                search={false}
                options={{
                    setting: {
                        listsHeight: 400,
                    },
                    reload: () => { getData() }
                }}
                pagination={{
                    pageSize: 100,
                    onChange: (page) => console.log(page),
                }}
                headerTitle="交易所数据"
            />
        </Suspense>
    );
}

export default Exchange;
