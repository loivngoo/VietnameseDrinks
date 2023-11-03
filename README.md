# \_\_\_Note

# FEATURES

I. VIETNAMESE DRINKS CLIENT

1. Home

- Layout Header Navbar PageContainer Footer

2. Menu

- ListProduct(count, product[])
- ProductDetail(image_path, name, description, price, sale_price?, event, created_at, updated_at)

3. Cart

- CRUD Cart(product[], status(pending, done), count, total_price, created_at, updated_at )

4. CHECKOUT(email guest| client account)

- InputInformation(guest | client)

5. Payment

- MethodPayment(Paypal, Debit/Credit Card VN, Momo, ZaloPay, ApplePay, GooglePay)
- SetTimeout(cb,60000) function cb(checkout ? Cart.update(id, status=done) : Cart.update(id, status=cancel))

6. Shipping

- DeliveryNotification(id, total_price, product[], time_start, time_end, created_at, updated_at)

7. Send email

- Call API send email thank you & tracking order

8. Profile

- Get Profile
- Reset Password

II. VIETNAMESE DRINKS SERVER (\*)

\_\_\_MENU

1. API ListProduct
2. API ProductDetail

\_\_\_CART

1. API GetCart
2. API UpdateCart
3. API DeleteCart
4. API CreateCart

\_\_\_PAYMENT

1. API GetBill
2. API CreateBill

\_\_\_EMAIL

1. API SendEmail

\_\_\_PROFILE

1. API SignIn
2. API SignUp
3. API GetProfile
4. API UpdateProfile
5. API ResetPassword

III. VN-DRINKS ADMIN FRONTEND

1. Home

- Dashboard(time_start, time_end, revenue, quantity)

2. Product

- CreateProduct
- UpdateProduct
- RemoveProduct
- Delete Product

3. Menu

- MenuDetail
- AddToMenu
- RemoveFromMenu

4. Payment

- ListBill
- BillDetail

IV. VN-DRINKS ADMIN SERVER (\*)

\_\_\_PROFILE

1. API CreateProfile
2. API UpdateProfile
3. API ListProfile
4. API ProfileDetail

\_\_\_USER

1. API CreateUser
2. API UpdateUser
3. API ListUSer
4. API UserDetail
5. API DeleteUser

\_\_\_HOME

1. API GetDashboard

\_\_\_Menu

1. API GetMenu
2. API ClearMenu
3. API AddToMenu
4. API RemoveFromMenu

\_\_\_Payment

1. API ListBill
2. API BillDetail
