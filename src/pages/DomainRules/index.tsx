import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  Button,
  Col,
  Input,
  PageInfo,
  Row,
  Select,
  SortInfo,
  Space,
  Table,
  TableSort,
} from 'tdesign-react';
import Option from 'tdesign-react/es/select/base/Option';
import { AppDispatch, RootState } from '../../store/store';
import {
  changeDisplaycount,
  changeDomain,
  changeState,
  asyncQuery,
  changeSort,
  changePage,
} from './slice';

import { PageParams, SortParams } from './const';

const mapStateToProps = (state: RootState) => {
  return { state: state.domainRules };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    changeSort(sortParams: SortParams) {
      dispatch(changeSort(sortParams));
      dispatch(asyncQuery());
    },
    changePage(pageParams: PageParams) {
      dispatch(changePage(pageParams));
      dispatch(asyncQuery());
    },
    changeDomain(domain: string) {
      dispatch(changeDomain(domain));
    },
    changeState(state: string) {
      dispatch(changeState(state));
    },
    changeDisplaycount(displaycount: string) {
      dispatch(changeDisplaycount(displaycount));
    },
    asyncQuery() {
      dispatch(asyncQuery());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

type State = {};

class DomainRules extends Component<Props, State> {
  componentDidMount() {
    this.props.asyncQuery();
  }

  handleQuery = () => {
    const { params } = this.props.state;
    const pageParams: PageParams = {
      limit: params.limit,
      offset: 0,
    };
    this.props.changePage(pageParams);
  };

  render() {
    const { data, params, loading } = this.props.state;

    return (
      <Row gutter={[0, 10]}>
        <Col span={12}>
          <Space breakLine direction="horizontal">
            <Input
              value={params.domain}
              onChange={(value) => {
                this.props.changeDomain(String(value));
              }}
              onKeyup={(_, context) => {
                if (context.e.key === 'Enter') {
                  this.handleQuery();
                }
              }}
            ></Input>

            <Select
              placeholder="状态"
              autoWidth
              clearable
              defaultValue={params.state}
              onChange={(value) => {
                this.props.changeState(String(value));
              }}
            >
              <Option label="待审核" value="105"></Option>
              <Option label="失效" value="1"></Option>
              <Option label="生效" value="3"></Option>
            </Select>

            <Select
              placeholder="不显示总数"
              autoWidth
              clearable
              defaultValue={params.displaycount}
              onChange={(value) => {
                this.props.changeDisplaycount(String(value));
              }}
            >
              <Option label="显示总数" value="1"></Option>
            </Select>

            <Button
              theme="primary"
              type="button"
              onClick={this.handleQuery}
              loading={loading}
            >
              查询
            </Button>
          </Space>
        </Col>

        <Col span={12}>
          <Table
            rowKey="id"
            data={data.rows}
            bordered
            loading={loading}
            disableDataPage
            columns={[
              {
                colKey: 'id',
                title: '编号',
                align: 'center',
                sorter: true,
                width: '100px',
              },
              { colKey: 'domain', title: 'domain' },
            ]}
            onSortChange={(tableSort: TableSort, _) => {
              let sortBy: string = '';
              let descending: boolean = false;
              if (tableSort !== undefined) {
                sortBy = (tableSort as SortInfo).sortBy;
                descending = (tableSort as SortInfo).descending;
              }
              const sort = sortBy;
              let order = '';
              if (sort !== '') {
                order = descending ? 'desc' : 'asc';
              }
              const sortParams: SortParams = { sort, order };
              this.props.changeSort(sortParams);
            }}
            pagination={{
              defaultCurrent: params.offset / params.limit + 1,
              defaultPageSize: params.limit,
              total: data.total,
              current: params.offset / params.limit + 1,
              pageSize: params.limit,
            }}
            onPageChange={(pageInfo: PageInfo, _) => {
              const limit: number = pageInfo.pageSize;
              // 如果修改了每页展示的条数，就跳转到第一页
              const offset =
                pageInfo.pageSize === params.limit
                  ? (pageInfo.current - 1) * limit
                  : 0;
              const pageParams: PageParams = { limit, offset };
              this.props.changePage(pageParams);
            }}
          ></Table>
        </Col>
      </Row>
    );
  }
}

export default connector(DomainRules);
