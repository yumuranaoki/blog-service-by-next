import * as React from 'react';
import DefaultLayout from '../layouts/default';
import { Heading, Form, Button, FormField, TextArea } from 'grommet';

const Add: React.FC<{}> = () => {
  return (
    <DefaultLayout logoutButton={false}>
      <Heading margin="none">Try Post</Heading>
      <Form>
        <FormField name="title" label="title" />
        <FormField name="place" label="place" />
        <TextArea placeholder="describe detail here" />
        <Button type="submit" primary label="Submit" />
      </Form>
    </DefaultLayout>
  )
}

export default Add;
