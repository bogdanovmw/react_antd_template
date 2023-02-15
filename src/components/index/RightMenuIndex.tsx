import { Layout, theme, Form, Input, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';

export const RightMenuIndex = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { handleSubmit, control } = useForm<any>();

    const onSave = (data: any) => {
        console.log(data);
    };

    return (
        <Layout.Sider width={300} style={{ background: colorBgContainer }}>
            <Form labelCol={{ span: 6 }} onFinish={handleSubmit((data) => onSave(data))} className="m_8">
                <Controller
                    control={control}
                    name="firstname"
                    render={({ field }) => (
                        <Form.Item
                            style={{ textAlign: 'center', marginBottom: '0' }}
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Поле не должно быть пустое!',
                                },
                            ]}
                        >
                            <Input {...field} placeholder="Имя" className="m_t_b_8" />
                        </Form.Item>
                    )}
                />

                <Controller
                    control={control}
                    name="lastname"
                    render={({ field }) => (
                        <Form.Item
                            style={{ textAlign: 'center', marginBottom: '0' }}
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Поле не должно быть пустое!',
                                },
                            ]}
                        >
                            <Input {...field} placeholder="Фамилия" className="m_t_b_8" />
                        </Form.Item>
                    )}
                />

                <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <Form.Item
                            style={{ textAlign: 'center', marginBottom: '0' }}
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Email введен не верно!',
                                },
                                {
                                    required: true,

                                    message: 'Поле не должно быть пустое!',
                                },
                            ]}
                        >
                            <Input {...field} placeholder="Email" className="m_t_b_8" />
                        </Form.Item>
                    )}
                />

                <Button type="primary" htmlType="submit" block className="m_t_b_8">
                    Сохранить
                </Button>
            </Form>
        </Layout.Sider>
    );
};
