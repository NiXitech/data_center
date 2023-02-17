import type { ActionType, ProColumns } from '@ant-design/pro-table'
import { ProTable } from '@ant-design/pro-table';
import { useEffect, useRef, useState } from 'react';
import { getWithdrawList } from '@/services/http/api';
import { approveWithdraw } from '@/services/http/api';
import { Button, Modal } from 'antd';

const Exchange = () => {
    const actionRef = useRef<ActionType>();
    const [showModal, setshowModal] = useState(false)
    const [showModalcontent, setshowModalcontent] = useState('')
    const [successList, setsuccessList] = useState([])

    const postapproveWithdraw = async () => {
        try {
            const { code, data } = await approveWithdraw() as any
            if (code === 200) {
                setshowModal(true)
                setsuccessList(data)
                setshowModalcontent('操作成功')
            }else{
                setshowModalcontent('操作失败')
            }
            
        } catch (error) {

        }
    }

    const columns: ProColumns[] = [
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
            title: '帐号ID',
            dataIndex: 'account_id',
            ellipsis: true,
            copyable: true,
        },
        {
            title: '提现地址',
            dataIndex: 'item_id',
            ellipsis: true,
            copyable: true,
        },
        {
            title: '提现应到账金额',
            dataIndex: 'order_amount',
            ellipsis: true
        },
        {
            title: '提现券ID',
            dataIndex: 'coupon_id',
            ellipsis: true,
        },
        // {
        //     title: '操作',
        //     valueType: 'option',
        //     key: 'option',
        //     render: (text, record, _, action) => [
        //         <a
        //             key="withdraw"
        //             onClick={() => {
        //                 postapproveWithdraw(record.id);
        //             }}
        //         >
        //             提现
        //         </a>,
        //     ],
        // },
    ];

    const [list, setList] = useState([])

    const getData = async () => {
        try {
            const { data } = await getWithdrawList() as any
            setList(data)
        } catch (error) {

        }
    }

    useEffect(
        () => {
            getData()
        }, [])

    return (
        <>
            <ProTable
                columns={columns}
                actionRef={actionRef}
                dataSource={list}
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
                toolBarRender={() => [
                    <Button key="button" type="primary" onClick={() => { postapproveWithdraw() }}>
                        提现
                    </Button>,
                ]}
            />
            <Modal
                open={showModal}
                onOk={() => setshowModal(false)}
                onCancel={() => setshowModal(false)}
                title={showModalcontent}
            >
                {
                    successList.map((item, index) => {
                        return (
                            <div key={item}>
                                <p>状态：{item?.transation?.result}</p>
                                <p>订单号：{item?.orderId }</p>
                            </div>
                        )
                    })
                }
            </Modal>
        </>
    );
}

export default Exchange;
