class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        products = [1] * len(nums)
        rp1 = 1
        rp2 = 1
        
        for i in range(len(nums)):
            products[i] *= rp1
            rp1 *= nums[i]
            products[len(nums) - 1 - i] *= rp2
            rp2 *= nums[len(nums) - 1 - i]
            
        return products


import unittest

class TestProductExceptSelf(unittest.TestCase):
    def test_product_except_self(self):
        s = Solution()

        # Test case 1
        nums = [1, 2, 3, 4]
        expected_output = [24, 12, 8, 6]
        self.assertEqual(s.productExceptSelf(nums), expected_output)

        # Test case 2
        nums = [2, 3, 4, 5]
        expected_output = [60, 40, 30, 24]
        self.assertEqual(s.productExceptSelf(nums), expected_output)

        # Test case 3
        nums = [1, 1, 1, 1]
        expected_output = [1, 1, 1, 1]
        self.assertEqual(s.productExceptSelf(nums), expected_output)
        
    if __name__ == '__main__':
        unittest.main()