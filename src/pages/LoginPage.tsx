import { Layout, Col, Row, Input, Form, Button, Typography } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { IFormLogin } from '../models/ILogin';

export const LoginPage = () => {
    const { handleSubmit, control } = useForm<IFormLogin>();

    const onSave = (data: IFormLogin) => {
        console.log(data);
    };

    return (
        <Layout.Content style={{ height: '92vh' }}>
            <Form labelCol={{ span: 6 }} onFinish={handleSubmit((data) => onSave(data))}>
                <Row typeof="flex" justify="center" align="middle" style={{ height: '60vh' }}>
                    <Col span={4}>
                        <Typography.Title level={3} style={{ textAlign: 'center' }}>
                            Вход в систему
                        </Typography.Title>
                        <Controller
                            control={control}
                            name="login"
                            render={({ field }) => (
                                <Form.Item
                                    style={{ textAlign: 'center' }}
                                    name="login"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Поле не должно быть пустое!',
                                        },
                                    ]}
                                >
                                    <Input.Password {...field} placeholder="Логин" className="m_t_b_8" />
                                </Form.Item>
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Form.Item
                                    style={{ textAlign: 'center' }}
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Поле не должно быть пустое!',
                                        },
                                    ]}
                                >
                                    <Input.Password {...field} placeholder="Пароль" className="m_t_b_8" />
                                </Form.Item>
                            )}
                        />
                        <Button type="primary" htmlType="submit" block className="m_t_b_8">
                            Авторизация
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Layout.Content>
    );
};
