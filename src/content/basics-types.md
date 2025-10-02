- Để khai báo Type trong Typescript thì chúng ta sử dụng cú pháp dấu 2 chấm(conlon) => keyword(let, vả, const) variableName: type = value;

```typescript
let score: number = 10;

// Error: Type 'string' is not assignable to type 'number'
score = "10"
```

- Type `any` cho phép sử dụng bất kỳ giá trị nào, hạn chế sử dụng type `any` nhất có thể.
- Type `number` dành cho giá trị số
- Type `string` dành cho giá trị chuỗi
- Type `boolean` dành cho giá trị true hoặc false
- Type`unknown` dành cho những biến hoặc params mà chúng ta chưa xác định được type rõ ràng của nó là gì.

- Sử dụng `typeof variableName` để kiểm tra type của một biến.
- Chỉ sử dụng typeof trực tiếp vào biến hoặc param, chứ không sử dụng vào Type được

- Type `never` không gán được bất kỳ giá trị nào

- Dấu `?` nằm sau property nghĩa là optional(không bắt buộc)

- Union type `|`
``` typescript
   string | number
```

- Intersection type `&`
- `{}` là một type đưcrj biệt trong typescript, nó có tâts cả giá trị ngoại trừ `null` và `undefined` và không nên dùng khi khai báo chon các giá trị 
- Kho làm việc với object thi nên khai báo rõ ràng hoặc dùng `Record<string,any>`

- Sử dụng `typeof` vào biến để kiểm tra type của biến nào đó
- Để khai báo báo type trong typescript thì chúng ta sử dụng từ khoá là `interface` và `type`
```typescript
type A = {
   x: number;
};
interface A {
   x: number;
}
```
- Sử dụng `in` để kiểm tra 1 thuộc tính nào đó còn tồn tại trong obj nào đó hay không ? Phù hợp khi kiểm tra với Union Type

- Khi chúng ta sử dụng dấu : để khai báo type thì cái type nó sẽ mạnh hơn cái value (Type beast value)

- `as const` sẽ biến giá trị thành readonly, chỉ đọc không thể thêm, xoá và cập nhật.

- `satisfies` khi sử dụng satisfies thì "Value beast  type"
- `as type` là chúng ta đang khai báo khống với typescript