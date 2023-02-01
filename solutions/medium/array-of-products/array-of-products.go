func productExceptSelf(nums []int) []int {
	products := make([]int, len(nums))
	rp1 := 1
	rp2 := 1
	for i := 0; i < len(nums); i++ {
		products[i] = 1
	}
	for i := 0; i < len(nums); i++ {
		products[i] *= rp1
		rp1 *= nums[i]
		products[len(nums)-1-i] *= rp2
		rp2 *= nums[len(nums)-1-i]
	}
	return products
}