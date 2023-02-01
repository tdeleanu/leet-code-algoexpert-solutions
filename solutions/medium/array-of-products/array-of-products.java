class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] products = new int[nums.length];
        Arrays.fill(products, 1);
        int rp1 = 1;
        int rp2 = 1;
        
        for (int i = 0; i < nums.length; i++) {
            products[i] *= rp1;
            rp1 *= nums[i];
            products[nums.length - 1 - i] *= rp2;
            rp2 *= nums[nums.length - 1 - i];
        }
        return products;
    }
}
