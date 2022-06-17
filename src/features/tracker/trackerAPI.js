// A mock function to mimic making an async request for data
export function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({
      data: [{
        id:0,
        count:'2',
        item:'糖果'
      } , {
        id:1,
        count:'4',
        item:'巧克力'
      },{
        id:2,
        count:'2',
        item:'蘋果'
      } , {
        id:3,
        count:'5',
        item:'草莓'
      }]
    }), 500)
  );
}
