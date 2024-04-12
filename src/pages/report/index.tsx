import React from 'react'
import { Textarea, View,} from '@tarojs/components'
import {Button, Form, FormItem} from '@antmjs/vantui'
import {useSelector} from 'react-redux';
import ThemeContainer from '../../components/theme/index'
import './index.scss'
import { getAuthData } from '../../common/utils';

const { memo } = React;

const Report = () => {

  const authData = getAuthData();
  const fontColor = '#8F1AFF'

  const { T }: any = useSelector((state: any) => {
    const config = state.config
    return {
      T: config.locales.data,
    };
  });

  const onFinish = (errs, res) => {
    console.info(errs, res);
  }

  return (
    <ThemeContainer>
      <View className='report_wrap'>
        <View className='create_form'>
          <Form onFinish={onFinish} initialValues={{ token: authData?.token?.id_token }}>
            <FormItem
              label={' '}
              name='feedback'
              layout='vertical'
              trigger='onInput'
              validateTrigger='onBlur'
              valueFormat={(e) => e.detail.value}
            >
              <Textarea placeholder={T['reportDesc']} showCount maxlength={300} style={{ minHeight: 150, maxHeight: 250 }} autoHeight />
            </FormItem>

            <Button style='margin-top: 50rpx;' color={fontColor} block round formType='submit'>
              { T['submit'] }
            </Button>
          </Form>
        </View>
      </View>
    </ThemeContainer>
  )
}

export default memo(Report);
