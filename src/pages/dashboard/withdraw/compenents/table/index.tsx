import type { ActionType, ProColumns } from '@ant-design/pro-table'
import { ProTable } from '@ant-design/pro-table';
import { useEffect, useRef, useState } from 'react';
import { getWithdrawList } from '@/services/http/api';
import { editExchange } from '@/services/http/api';

const Exchange = () => {
    const actionRef = useRef<ActionType>();

    const columns: ProColumns<GithubIssueItem>[] = [
        {
            title: '订单号',
            dataIndex: 'order_id',
            ellipsis: true,
            copyable: true,
        },
        {
            title: '订单币种',
            dataIndex: 'order_coin_type',
            ellipsis: true,
        },
        {
            title: '账号',
            dataIndex: 'account_id',
            ellipsis: true,
            copyable: true,
        },
    ];

    const [list, setList] = useState([])

    const getData = async () => {
        try {
            const { data } = await getWithdrawList() as any
            console.log('体现数据------->', data)
            setList(data)
        } catch (error) {

        }
    }

    const editData = async (rowKey: any, record: any, row: any) => {
        try {
            const { code, data } = await editExchange(record) as any
            console.log('code:', code, 'data:', data)
        } catch (error) {

        }
    }

    useEffect(
        () => {
            getData()
        }, [])

    return (
        <ProTable
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
            headerTitle="提现申请列表"
        />
    );
}

export default Exchange;
