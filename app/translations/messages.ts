/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  // Login screen
  login: {
    id: 'login',
    defaultMessage: 'Đăng nhập',
  },
  sendBtn: {
    id: 'sendBtn',
    defaultMessage: 'Gửi',
  },
  loginErr: {
    id: 'loginErr',
    defaultMessage: 'Vui lòng thử đăng nhập lại',
  },
  loginFailure: {
    id: 'loginFailure',
    defaultMessage: 'Đăng nhập không thành công!',
  },
  accountWarning: {
    id: 'accountWarning',
    defaultMessage: 'Tài khoản không tồn tại hoặc sai mật khẩu',
  },
  messageRestoreAcc: {
    id: 'messageRestoreAcc',
    defaultMessage: 'Hệ thống đã gửi link khôi phục mật khẩu đến địa chỉ email của bạn',
  },
  requiredUserName: {
    id: 'requiredUserName',
    defaultMessage: 'Vui lòng nhập tên đăng nhập!',
  },
  requiredName: {
    id: 'requiredName',
    defaultMessage: 'Vui lòng nhập tên!',
  },
  requiredSize: {
    id: 'requiredSize',
    defaultMessage: 'Vui lòng nhập tên kích cỡ',
  },
  requiredPassword: {
    id: 'requiredPassword',
    defaultMessage: 'Vui lòng nhập mật khẩu!',
  },
  requiredPrice: {
    id: 'requiredPrice',
    defaultMessage: 'Vui lòng nhập giá!',
  },
  confirmPassword: {
    id: 'confirmPassword',
    defaultMessage: 'Vui lòng xác nhận mật khẩu!',
  },
  invalidPassword: {
    id: 'invalidPassword',
    defaultMessage: 'Mật khẩu xác nhận không đúng !',
  },
  retypePasswordPh: {
    id: 'retypePasswordPh',
    defaultMessage: 'Nhập lại mật khẩu*',
  },
  account: {
    id: 'account',
    defaultMessage: 'Tài khoản',
  },
  accountNo: {
    id: 'accountNo',
    defaultMessage: 'Số Tài khoản',
  },
  accountPlaceholder: {
    id: 'accountPlaceholder',
    defaultMessage: 'Tên Tài khoản*',
  },
  password: {
    id: 'password',
    defaultMessage: 'Mật khẩu',
  },
  passwordPh: {
    id: 'passwordPh',
    defaultMessage: 'Mật khẩu*',
  },
  forgotPassword: {
    id: 'forgotPassword',
    defaultMessage: 'Quên mật khẩu?',
  },
  // Profile 
  editInfo: {
    id: `editInfo`,
    defaultMessage: 'Cập nhật tài khoản',
  },
  newInfo: {
    id: `newInfo`,
    defaultMessage: 'Thông tin mới',
  },
  hi: {
    id: `hi`,
    defaultMessage: 'Xin chào',
  },
  changePass: {
    id: `changePass`,
    defaultMessage: 'Đổi mật khẩu',
  },
  logout: {
    id: `logout`,
    defaultMessage: 'Đăng xuất',
  },
  //
  addToCurrentGroup: {
    id: 'addToCurrentGroup',
    defaultMessage: 'Thêm vào nhóm hiện tại'
  },
  removeFromCurrentGroup: {
    id: 'removeFromCurrentGroup',
    defaultMessage: 'Xoá khỏi nhóm hiện tại'
  },
  deleteTable: {
    id: 'deleteTable',
    defaultMessage: 'Xoá giường'
  },
  editTableName: {
    id: 'editTableName',
    defaultMessage: 'Chỉnh sửa'
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Header',
  },
  dashboard: {
    id: `dashboard`,
    defaultMessage: 'Bảng điều khiển',
  },
  addStore: {
    id: `addStore`,
    defaultMessage: 'Thêm điểm kinh doanh',
  },
  addStaff: {
    id: `addStaff`,
    defaultMessage: 'Thêm nhân viên',
  },
  editStore: {
    id: `editStore`,
    defaultMessage: 'Cập nhật thông tin điểm kinh doanh',
  },
  addMenuCategory: {
    id: `addMenuCategory`,
    defaultMessage: 'Thêm danh mục',
  },
  editMenuCategory: {
    id: `editMenuCategory`,
    defaultMessage: 'Sửa danh mục',
  },
  addPreparation: {
    id: `addPreparation`,
    defaultMessage: 'Thêm cách pha chế',
  },
  editPreparation: {
    id: `editPreparation`,
    defaultMessage: 'Sửa cách pha chế',
  },
  storeName: {
    id: `storeName`,
    defaultMessage: 'Tên điểm kinh doanh',
  },
  address: {
    id: `address`,
    defaultMessage: 'Địa chỉ',
  },
  phoneNumber: {
    id: `phoneNumber`,
    defaultMessage: 'Số điện thoại',
  },
  email: {
    id: `email`,
    defaultMessage: 'Email',
  },
  website: {
    id: `website`,
    defaultMessage: 'Website',
  },
  bank: {
    id: `bank`,
    defaultMessage: 'Ngân hàng',
  },
  bankBranch: {
    id: `bankBranch`,
    defaultMessage: 'Chi nhánh ngân hàng',
  },
  branch: {
    id: `branch`,
    defaultMessage: 'Chi nhánh',
  },
  policy: {
    id: `policy`,
    defaultMessage: 'Chính sách',
  },
  restaurant: {
    id: 'restaurant',
    defaultMessage: 'Chuỗi kinh doanh',
  },
  serviceList: {
    id: 'serviceList',
    defaultMessage: 'Danh sách dịch vụ',
  },
  checkboxServiceResTitle: {
    id: 'checkboxServiceResTitle',
    defaultMessage: 'Chọn tất cả dịch vụ',
  },
  requiredmenuNumber: {
    id: 'requiredmenuNumber',
    defaultMessage: 'Combo phải có từ 2 Thực đơn trở lên',
  },
  requiredMenu: {
    id: 'requiredMenu',
    defaultMessage: 'Vui lòng chọn Thực đơn cho Combo',
  },
  requiredCategory: {
    id: 'requiredCategory',
    defaultMessage: 'Vui lòng chọn danh mục',
  },
  addServiceResTitle: {
    id: 'addServiceResTitle',
    defaultMessage: 'Thêm dịch vụ vào điểm kinh doanh',
  },
  emptyServiceResList: {
    id: 'emptyServiceResList',
    defaultMessage: 'Chưa có dịch vụ nào',
  },
  menuList: {
    id: 'menuList',
    defaultMessage: 'Danh sách Thực đơn',
  },
  checkboxMenuResTitle: {
    id: 'checkboxMenuResTitle',
    defaultMessage: 'Chọn tất cả Thực đơn',
  },
  addMenuResTitle: {
    id: 'addMenuResTitle',
    defaultMessage: 'Thêm Thực đơn vào điểm kinh doanh',
  },
  addMenuIntoCombo: {
    id: 'addMenuIntoCombo',
    defaultMessage: 'Thêm Thực đơn vào Combo',
  },
  emptyMenuResList: {
    id: 'emptyMenuResList',
    defaultMessage: 'Chưa có Thực đơn nào',
  },
  comboList: {
    id: 'comboList',
    defaultMessage: 'Danh sách combo',
  },
  checkboxComboResTitle: {
    id: 'checkboxComboResTitle',
    defaultMessage: 'Chọn tất cả combo',
  },
  addComboResTitle: {
    id: 'addComboResTitle',
    defaultMessage: 'Thêm combo vào điểm kinh doanh',
  },
  emptyComboResList: {
    id: 'emptyComboResList',
    defaultMessage: 'Chưa có combo nào',
  },
  restaurantList: {
    id: 'restaurantList',
    defaultMessage: 'Chuỗi kinh doanh',
  },
  staff: {
    id: 'staff',
    defaultMessage: 'Nhân viên',
  },
  service: {
    id: 'service',
    defaultMessage: 'Dịch vụ',
  },
  menu: {
    id: 'menu',
    defaultMessage: 'Thực đơn',
  },
  menuPh: {
    id: 'menuPh',
    defaultMessage: 'Thực đơn*',
  },
  combo: {
    id: 'combo',
    defaultMessage: 'Combo',
  },
  customer: {
    id: 'customer',
    defaultMessage: 'Khách hàng',
  },
  promotion: {
    id: 'promotion',
    defaultMessage: 'Khuyến mãi',
  },
  payment: {
    id: 'payment',
    defaultMessage: 'Thanh toán',
  },
  report: {
    id: 'report',
    defaultMessage: 'Báo cáo',
  },
  setting: {
    id: 'setting',
    defaultMessage: 'Cài đặt',
  },
  search: {
    id: 'search',
    defaultMessage: 'Tìm kiếm',
  },
  addNewRestaurant: {
    id: 'addNewRestaurant',
    defaultMessage: 'Thêm điểm kinh doanh'
  },
  restaurantImage: {
    id: 'restaurantImage',
    defaultMessage: 'Hình ảnh'
  },
  image: {
    id: 'image',
    defaultMessage: 'Hình ảnh'
  },
  save: {
    id: 'save',
    defaultMessage: 'Lưu',
  },
  designArea: {
    id: 'designArea',
    defaultMessage: 'Thiết kế mặt bằng'
  },
  selectGroup: {
    id: 'selectGroup',
    defaultMessage: 'Chọn nhóm'
  },
  createTable: {
    id: 'createTable',
    defaultMessage: 'Tạo giường mới',
  },
  editTable: {
    id: 'editTable',
    defaultMessage: 'Chỉnh sửa giường'
  },
  createArea: {
    id: 'createArea',
    defaultMessage: 'Tạo khu vực',
  },
  createGroup: {
    id: 'createGroup',
    defaultMessage: 'Tạo nhóm'
  },
  editArea: {
    id: 'editArea',
    defaultMessage: 'Cập nhật khu vực',
  },
  editGroup: {
    id: 'editGroup',
    defaultMessage: 'Cập nhật nhóm'
  },
  createFloor: {
    id: 'createFloor',
    defaultMessage: 'Tạo tầng mới'
  },
  editFloor: {
    id: 'editFloor',
    defaultMessage: 'Cập nhật tầng'
  },
  createStaff: {
    id: 'createStaff',
    defaultMessage: 'Tạo nhân viên',
  },
  area: {
    id: 'area',
    defaultMessage: 'Khu vực'
  },
  areaName: {
    id: 'areaName',
    defaultMessage: 'Tên khu vực'
  },
  areaType: {
    id: 'areaType',
    defaultMessage: 'Loại khu vực'
  },
  group: {
    id: 'group',
    defaultMessage: 'Nhóm'
  },
  groupName: {
    id: 'groupName',
    defaultMessage: 'Tên nhóm'
  },
  floor: {
    id: 'floor',
    defaultMessage: 'Tầng'
  },
  floorName: {
    id: 'floorName',
    defaultMessage: 'Tên tầng'
  },
  width: {
    id: 'width',
    defaultMessage: 'Chiều rộng'
  },
  height: {
    id: 'height',
    defaultMessage: 'Chiều dài'
  },
  staffList: {
    id: 'staffList',
    defaultMessage: 'Danh sách nhân viên'
  },
  tableName: {
    id: 'tableName',
    defaultMessage: 'Tên giường'
  },
  numberOfSeat: {
    id: 'numberOfSeat',
    defaultMessage: 'Số lượng ghế'
  },
  addMenu: {
    id: 'addMenu',
    defaultMessage: 'Thêm Thực đơn',
  },
  menuInfo: {
    id: 'menuInfo',
    defaultMessage: 'Thông tin món',
  },
  name: {
    id: 'name',
    defaultMessage: 'Tên',
  },
  requireStaffName: {
    id: 'requireStaffName',
    defaultMessage: 'Vui lòng nhập tên nhân viên',
  },
  namePh: {
    id: 'namePh',
    defaultMessage: 'Tên*',
  },
  price: {
    id: 'price',
    defaultMessage: 'Giá tiền'
  },
  discountPrice: {
    id: 'discountPrice',
    defaultMessage: 'Giá khuyến mãi'
  },
  successAddMenu: {
    id: 'successAddMenu',
    defaultMessage: 'Tạo danh mục thành công',
  },
  successDeletedMenu: {
    id: 'successDeletedMenu',
    defaultMessage: 'Đã xóa {menu}',
  },
  successAddPreparation: {
    id: 'successAddPreparation',
    defaultMessage: 'Tạo cách pha chế thành công',
  },
  successDeletedPreparation: {
    id: 'successDeletedPreparation',
    defaultMessage: 'Đã xóa {preparation}',
  },
  successEditMenu: {
    id: 'successEditMenu',
    defaultMessage: 'Cập nhật danh mục thành công',
  },
  successEditPreparation: {
    id: 'successEditPreparation',
    defaultMessage: 'Cập nhật cách pha chế thành công',
  },
  titleConfirmDeleted: {
    id: 'titleConfirmDeleted',
    defaultMessage: 'Xóa {item}',
  },
  contentConfirmDeleted: {
    id: 'contentConfirmDeleted',
    defaultMessage: 'Bạn có muốn xóa {item} ?',
  },
  ok: {
    id: 'ok',
    defaultMessage: 'Đồng ý',
  },
  cancel: {
    id: 'cancel',
    defaultMessage: 'Huỷ',
  },
  titleStore: {
    id: 'titleStore',
    defaultMessage: 'Điểm kinh doanh',
  },
  // Dashboard
  titleRevenueDate: {
    id: 'titleRevenueDate',
    defaultMessage: 'Doanh thu trong ngày',
  },
  titleRevenueLineChart: {
    id: 'titleRevenueLineChart',
    defaultMessage: 'Doanh thu của chuỗi',
  },
  titleRevenuePieChart: {
    id: 'titleRevenuePieChart',
    defaultMessage: 'Tỉ lệ doanh thu của các điểm kinh doanh',
  },
  titleTotalRevenueRp: {
    id: 'titleTotalRevenueRp',
    defaultMessage: 'Tổng doanh thu',
  },
  titleTotalFeeRp: {
    id: 'titleTotalFeeRp',
    defaultMessage: 'Chi phí khuyến mãi',
  },
  titleRevenueWeek: {
    id: 'titleRevenueWeek',
    defaultMessage: 'Doanh thu trong tuần',
  },
  titleRevenueMonth: {
    id: 'titleRevenueMonth',
    defaultMessage: 'Doanh thu trong tháng',
  },
  titleRevenueMethod: {
    id: 'titleRevenueMethod',
    defaultMessage: 'Doanh thu Thực đơn / dịch vụ',
  },
  titleItemTableMenuNm: {
    id: 'titleItemTableMenuNm',
    defaultMessage: 'Tên Thực đơn / dịch vụ',
  },
  titleItemTableQuantity: {
    id: 'titleItemTableQuantity',
    defaultMessage: 'Số lượng',
  },
  titleItemTableRevenue: {
    id: 'titleItemTableRevenue',
    defaultMessage: 'Doanh thu',
  },
  titleMainItemTable: {
    id: 'titleMainItemTable',
    defaultMessage: 'Top 5 Thực đơn / dịch vụ',
  },
  takeAway: {
    id: 'takeAway',
    defaultMessage: 'Thực đơn',
  }
  ,
  inRestaurant: {
    id: 'inRestaurant',
    defaultMessage: 'Dịch vụ',
  },
  seeMore: {
    id: 'seeMore',
    defaultMessage: 'XEM THÊM',
  },
  // Restaurant 
  noStaff: {
    id: 'noStaff',
    defaultMessage: 'Chưa có nhân viên nào',
  },
  noFloors: {
    id: 'noFloors',
    defaultMessage: 'Chưa có nhân viên nào',
  },
  bedType: {
    id: 'bedType',
    defaultMessage: 'Kiểu giường',
  },
  requiredResName: {
    id: 'requiredResName',
    defaultMessage: 'Vui lòng nhập tên điểm kinh doanh!',
  },
  requiredStaff: {
    id: 'requiredStaff',
    defaultMessage: 'Vui lòng nhập nhân viên!',
  },
  staffPlaceHolder: {
    id: 'staffPlaceHolder',
    defaultMessage: 'Tên nhân viên*',
  },
  requiredAddr: {
    id: 'requiredAddr',
    defaultMessage: 'Vui lòng nhập địa chỉ!',
  },
  requiredPhone: {
    id: 'requiredPhone',
    defaultMessage: 'Vui lòng nhập số điện thoại!',
  },
  invalidEmail: {
    id: 'invalidEmail',
    defaultMessage: 'Email không hợp lệ',
  },
  invalidPhone: {
    id: 'invalidPhone',
    defaultMessage: 'Số điện thoại không hợp lệ',
  },
  emptyMenu: {
    id: 'emptyMenu',
    defaultMessage: 'Chưa có món ăn nào',
  },
  emptyCombo: {
    id: 'emptyCombo',
    defaultMessage: 'Chưa có Combo nào',
  },
  askChooseGroup: {
    id: 'askChooseGroup',
    defaultMessage: 'Chọn một nhóm đi nào!',
  },  
  requiredMaxAcreage: {
    id: 'requiredMaxAcreage',
    defaultMessage: 'Vui lòng nhập diện tích nhỏ hơn 10000m',
  },
  requiredMinAcreage: {
    id: 'requiredMinAcreage',
    defaultMessage: 'Vui lòng nhập diện tích lớn hơn 0m',
  },
  // Common
  deleteConfirmMess: {
    id: 'deleteConfirmMess',
    defaultMessage: 'Xác nhận xoá',
  },  
  deleteConfirmContent: {
    id: 'deleteConfirmContent',
    defaultMessage: 'Bạn chắc chắn muốn xoá {name} không ?',
  },
  deleteConfirmContentStaff: {
    id: 'deleteConfirmContentStaff',
    defaultMessage: 'Bạn chắc chắn muốn xoá nhân viên {name} không ?',
  },
  deleteConfirmCustomer: {
    id: 'deleteConfirmCustomer',
    defaultMessage: 'Bạn chắc chắn muốn xoá khách hàng không ?',
  },
  deleteBtn: {
    id: 'deleteBtn',
    defaultMessage: 'Xoá',
  },
  cancelBtn: {
    id: 'cancelBtn',
    defaultMessage: 'Huỷ',
  },
  encourageCondition345x140: {
    id: 'encourageCondition345x140',
    defaultMessage: '(Kích thước 345 x 140)',
  },
  encourageCondition: {
    id: 'encourageCondition',
    defaultMessage: 'Kích thước {height} x {width}',
  },
  activating: {
    id: 'activating',
    defaultMessage: 'Đang hoạt động',
  },
  stop: {
    id: 'stop',
    defaultMessage: 'Đã đóng',
  },
  time: {
    id: 'time',
    defaultMessage: 'Thời gian',
  },
  loading: {
    id: 'loading',
    defaultMessage: 'Đang tải ...',
  },
  updateSuccessMess: {
    id: 'updateSuccessMess',
    defaultMessage: 'Cập nhật thành công',
  },
  allSelect: {
    id: 'allSelect',
    defaultMessage: 'Tất cả',
  },
  emptyCurrFloor: {
    id: 'emptyCurrFloor',
    defaultMessage: 'Không tồn tại tầng hiện tại',
  },
  noWiHe: {
    id: 'noWiHe',
    defaultMessage: 'no width height',
  },
  createDragItem: {
    id: 'createDragItem',
    defaultMessage: 'Tạo giường',
  },
  requiredInput: {
    id: 'requiredInput',
    defaultMessage: 'Vui lòng nhập',
  },
  requiredChoose: {
    id: 'requiredChoose',
    defaultMessage: 'Vui lòng chọn',
  },
  requiredInputNumber: {
    id: 'requiredInputNumber',
    defaultMessage: 'Vui lòng nhập số',
  },
  requiredInputGreaterZero: {
    id: 'requiredInputGreaterZero',
    defaultMessage: 'Vui lòng nhập số lớn hơn 0 !',
  },
  requiredInputNumberMax: {
    id: 'requiredInputNumberMax',
    defaultMessage: 'Vui lòng nhập số bé hơn hoặc bằng 100',
  },
  requiredMerNm: {
    id: 'requiredMerNm',
    defaultMessage: 'Vui lòng nhập tên đơn vị kinh doanh',
  },
  serInfoMess: {
    id: 'serInfoMess',
    defaultMessage: 'Thông tin dịch vụ',
  },
  prodInfoMess: {
    id: 'prodInfoMess',
    defaultMessage: 'Thông tin Thực đơn',
  },
  menuCode: {
    id: 'menuCode',
    defaultMessage: 'Mã Thực đơn',
  },
  serviceCode: {
    id: 'serviceCode',
    defaultMessage: 'Mã dịch vụ',
  },
  menuNamePh: {
    id: 'menuNamePh',
    defaultMessage: 'Tên Thực đơn',
  },
  serviceNamePh: {
    id: 'serviceNamePh',
    defaultMessage: 'Tên dịch vụ',
  },
  categoryPh: {
    id: 'categoryPh',
    defaultMessage: 'Danh mục*',
  },
   category: {
    id: 'category',
    defaultMessage: 'Danh mục',
  },
  description: {
    id: 'description',
    defaultMessage: 'Mô tả',
  },
  applyAll: {
    id: 'applyAll',
    defaultMessage: 'Áp dụng cho tất cả chuỗi',
  },
  edit: {
    id: 'edit',
    defaultMessage: 'Chỉnh sửa'
  },
  point: {
    id: 'point',
    defaultMessage: 'Số điểm'
  },
  points: {
    id: 'points',
    defaultMessage: 'điểm'
  },
  spending: {
    id: 'spending',
    defaultMessage: 'Số tiền tiêu'
  },
  avatar: {
    id: 'avatar',
    defaultMessage: 'Hình đại diện'
  },
  reuiredChoosemenu: {
    id: 'reuiredChoosemenu',
    defaultMessage: 'Vui lòng chọn danh sách cho Thực đơn'
  },
  size: {
    id: 'size',
    defaultMessage: 'Kích thước'
  },
  sizeNm: {
    id: 'sizeNm',
    defaultMessage: 'Tên kích cỡ'
  },
  generalInfo: {
    id: 'generalInfo',
    defaultMessage: 'Thông tin chung'
  },
  month: {
    id: 'month',
    defaultMessage: 'Tháng'
  },
  year: {
    id: 'year',
    defaultMessage: 'Năm'
  },
  logoMerchant: {
    id: 'logoMerchant',
    defaultMessage: 'Logo chuỗi kinh doanh'
  },
  merchantNm: {
    id: 'merchantNm',
    defaultMessage: 'Tên chuỗi kinh doanh'
  },
  taxCode: {
    id: 'taxCode',
    defaultMessage: 'Mã số thuế'
  },
  tax: {
    id: 'tax',
    defaultMessage: 'Thuế'
  },
  delegateName: {
    id: 'delegateName',
    defaultMessage: 'Người đứng tên kinh doanh'
  },
  firstNm: {
    id: 'firstNm',
    defaultMessage: 'Họ'
  },
  lastNm: {
    id: 'lastNm',
    defaultMessage: 'Tên đại diện'
  },
  free: {
    id: 'free',
    defaultMessage: 'Miễn phí'
  },
  hasFee: {
    id: 'hasFee',
    defaultMessage: 'Sử dụng chính thức'
  },
  hasFeeSetting: {
    id: 'hasFeeSetting',
    defaultMessage: 'Có tính phí'
  },
  trial: {
    id: 'trial',
    defaultMessage: 'Dùng thử có thời hạn'
  },
  stopUsing: {
    id: 'stopUsing',
    defaultMessage: 'Đã ngưng dịch vụ'
  },
  pricePerMonth: {
    id: 'pricePerMonth',
    defaultMessage: 'Giá theo tháng'
  },
  pricePerYear: {
    id: 'pricePerYear',
    defaultMessage: 'Giá theo năm'
  },
  bankInfo: {
    id: 'bankInfo',
    defaultMessage: 'Thông tin ngân hàng'
  },
  serviceUsing: {
    id: 'serviceUsing',
    defaultMessage: 'Dịch vụ sử dụng'
  },
  updatePassSuccess: {
    id: 'updatePassSuccess',
    defaultMessage: 'Cập nhật mật khẩu thành công'
  },
  updatePassSFail: {
    id: 'updatePassSFail',
    defaultMessage: 'Cập nhật mật khẩu thất bại'
  },
  backToMain: {
    id: 'backToMain',
    defaultMessage: 'Quay trở về trang chủ'
  },
  comebackLate: {
    id: 'comebackLate',
    defaultMessage: 'Vui lòng thử lại'
  },
  money: {
    id: 'money',
    defaultMessage: 'Số tiền'
  },
  timeUsing: {
    id: 'timeUsing',
    defaultMessage: 'Thời hạn sử dụng dịch vụ'
  },
  deliveryFee: {
    id: 'deliveryFee',
    defaultMessage: 'Phí giao hàng'
  },
  under: {
    id: 'under',
    defaultMessage: 'Dưới'
  },
  from: {
    id: 'from',
    defaultMessage: 'Từ'
  },
  to: {
    id: 'to',
    defaultMessage: 'Đến'
  },
  fromDate: {
    id: 'fromDate',
    defaultMessage: 'Từ Ngày'
  },
  toDate: {
    id: 'toDate',
    defaultMessage: 'Đến Ngày'
  },
  top: {
    id: 'top',
    defaultMessage: 'Trên'
  },
  language: {
    id: 'language',
    defaultMessage: 'Ngôn ngữ'
  },
  day: {
    id: 'day',
    defaultMessage: 'Ngày'
  },
  week: {
    id: 'week',
    defaultMessage: 'Tuần'
  },
  searchReport: {
    id: 'searchReport',
    defaultMessage: 'Xem',
  },
  merInfo: {
    id: 'merInfo',
    defaultMessage: 'Thông tin doanh nghiệp',
  },
  contact: {
    id: 'contact',
    defaultMessage: 'Liên Hệ',
  },
  customerList: {
    id: 'customerList',
    defaultMessage: 'Danh sách khách hàng',
  },
  promotionList: {
    id: 'promotionList',
    defaultMessage: 'Danh sách khách hàng',
  },
  noExpiredDay: {
    id: 'noExpiredDay',
    defaultMessage: 'Không thời hạn',
  },
  requireFromDate: {
    id: 'requireFromDate',
    defaultMessage: 'Vui lòng chọn ngày bắt đầu nhỏ hơn ngày kết thúc',
  },
  requireToDate: {
    id: 'requireToDate',
    defaultMessage: 'Vui lòng chọn ngày kết thúc lớn hơn ngày bắt đầu',
  },
  requireFromDateMax: {
    id: 'requireFromDateMax',
    defaultMessage: 'Vui lòng chọn ngày bắt đầu lớn hơn 2017-01-01!',
  },
  pickup: {
    id: `app.containers.CustomerDetail.pickup`,
    defaultMessage: 'Mang đi',
  },
  atStore: {
    id: `app.containers.CustomerDetail.atStore`,
    defaultMessage: 'Tại điểm kinh doanh',
  },
  requiredMethodOfPreparation: {
    id: `requiredMethodOfPreparation`,
    defaultMessage: 'Vui lòng nhập tên cách Pha Chế'
  },
  methodOfPreparation: {
    id: `methodOfPreparation`,
    defaultMessage: 'Cách Pha Chế'
  }
  ,
  methodOfPreparationNm: {
    id: `methodOfPreparationNm`,
    defaultMessage: 'Tên cách Pha Chế'
  }
  ,
  dishMore: {
    id: `dishMore`,
    defaultMessage: 'Món thêm'
  },
  requiredDish: {
    id: 'requiredDish',
    defaultMessage: 'Vui lòng nhập tên món!',
  },
  dishNm: {
    id: `dishNm`,
    defaultMessage: 'Tên món'
  },
  more: {
    id: `more`,
    defaultMessage: 'Thêm'
  },
  ingredientMore: {
    id: `ingredientMore`,
    defaultMessage: 'Thêm thành phần'
  },
  ingredientNm: {
    id: `ingredientNm`,
    defaultMessage: 'Tên thành phần'
  },
  ingredient: {
    id: `ingredient`,
    defaultMessage: 'Thành phần'
  },
  timeCook: {
    id: `timeCook`,
    defaultMessage: 'Thời gian nấu'
  },
  discountLessPrice: {
    id: `discountLessPrice`,
    defaultMessage: 'Giá khuyến mãi nhỏ hơn giá tiền!'
  },
  orderMore: {
    id: `orderMore`,
    defaultMessage: 'Gọi thêm'
  },
  addSize: {
    id: `addSize`,
    defaultMessage: 'Thêm kích cỡ'
  },
});
