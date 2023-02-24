import React, { Fragment } from 'react';
import { Button, Form, Input, Select } from 'antd';

const Tags = {
  input: Input,
  select: Select,
};

const formItemLayout = {
  labelCol: { span: 24 },
  //   wrapperCol: { span: 24 },
  scrollToFirstError: true,
  size: 'large',
  labelAlign: 'left',
  //   layout: 'vertical',
};

interface componentprops {
  itemList: [];
  submitForm: any;
}

const CreateForm: React.FC<componentprops> = (props) => {
  const { itemList, submitForm } = props;
  const [form] = Form.useForm();

  const onfinish = (values: any) => {
    submitForm(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="form"
      autoComplete="off"
      {...formItemLayout}
      layout="inline"
      style={{
        justifyContent: 'space-between',
      }}
      onFinish={onfinish}
      onFinishFailed={onFinishFailed}
    >
      {itemList.map((item) => {
        const Tag = Tags[item.itemtype];
        return (
          <Fragment key={item.Item.label}>
            <Form.Item {...item.Item} style={{ width: '45%' }}>
              <Tag {...item.childkey} />
            </Form.Item>
          </Fragment>
        );
      })}
      <Form.Item
        style={{
          padding: '24px',
          width: '45%',
          textAlign: 'right',
        }}
      >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
      <Form.Item
        style={{
          padding: '24px',
          width: '45%',
          textAlign: 'left',
        }}
      >
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
