import { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { useActions } from '../../hook/actions';

export const CardAdmin = () => {
    const [data, setData] = useState<any>([]);
    const { changeModalAdmin, changeData } = useActions();

    useEffect(() => {
        const lData: any = [];
        for (let i = 0; i < 10; i++) lData.push({ key: i, name: `name ${i}`, age: i * 4, address: `address ${i}` });
        setData(lData);
    }, []);

    return (
        <Row gutter={16}>
            {data &&
                data.map((el: any) => (
                    <Col key={el.key} span={4} className="mb_20">
                        <Card title={`Card ${el.key}`} bordered={false} extra={<a href="/#">More</a>}>
                            <p>Name: {el.name}</p>
                            <p>Age: {el.age}</p>
                            <p>Address: {el.address}</p>
                            <Button
                                type="primary"
                                className="m_t_b_8"
                                onClick={() => {
                                    changeModalAdmin(true);
                                    changeData(el);
                                }}
                            >
                                Открыть
                            </Button>
                        </Card>
                    </Col>
                ))}
        </Row>
    );
};
